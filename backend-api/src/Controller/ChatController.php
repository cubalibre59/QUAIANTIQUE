<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ChatController extends AbstractController
{
    private $client;
    private $openaiEndpoint;
    private $openaiKey;
    private $deploymentId;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
        $this->openaiEndpoint = $_ENV['AZURE_OPENAI_ENDPOINT'];
        $this->openaiKey = $_ENV['AZURE_OPENAI_KEY'];
        $this->deploymentId = $_ENV['AZURE_OPENAI_DEPLOYMENT']; // ej: ph4
    }

    #[Route('/api/chat', name: 'chat_api', methods: ['POST'])]
    public function chat(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $prompt = $data['prompt'] ?? '';

        $response = $this->client->request('POST', $this->openaiEndpoint . '/openai/deployments/' . $this->deploymentId . '/chat/completions?api-version=2024-02-15-preview', [
            'headers' => [
                'Content-Type' => 'application/json',
                'api-key' => $this->openaiKey,
            ],
            'json' => [
                'messages' => [
                    ['role' => 'system', 'content' => 'Tu es un assistant pour le restaurant QuaiAntique.'],
                    ['role' => 'user', 'content' => $prompt],
                ],
                'max_tokens' => 500,
                'temperature' => 0.7,
            ]
        ]);

        $result = $response->toArray();

        return $this->json([
            'response' => $result['choices'][0]['message']['content']
        ]);
    }
}
