<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class IpController
{
    private $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    #[Route('/my-ip', name: 'my_ip')]
    public function index(): Response
    {
        // Llama a un servicio que devuelve tu IP pública
        $response = $this->client->request('GET', 'https://ifconfig.me/ip');
        $ip = trim($response->getContent());

        return new Response("Mon IP publique est : $ip");
    }
}
