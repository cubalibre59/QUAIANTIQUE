// js/ai/chat.js

export function initChat(apiUrl = 'https://TON-BACKEND.railway.app/api/chat') {
  const container = document.createElement('div');
  container.innerHTML = `
    <div id="chat-wrapper" style="position:fixed;bottom:20px;right:20px;width:300px;max-height:400px;background:#fff;border:1px solid #ccc;box-shadow:0 0 10px rgba(0,0,0,0.2);border-radius:8px;display:flex;flex-direction:column;overflow:hidden;z-index:9999;">
      <div style="background:#333;color:#fff;padding:10px;font-weight:bold;">Assistant QuaiAntique</div>
      <div id="chat-box" style="flex:1;padding:10px;overflow-y:auto;font-size:14px;"></div>
      <div style="display:flex;border-top:1px solid #ccc;">
        <input type="text" id="user-input" placeholder="Pose ta question..." style="flex:1;border:none;padding:10px;" />
        <button id="send-btn" style="background:#333;color:white;border:none;padding:10px;cursor:pointer;">➤</button>
      </div>
    </div>
  `;
  document.body.appendChild(container);

  const chatBox = container.querySelector('#chat-box');
  const sendBtn = container.querySelector('#send-btn');
  const userInput = container.querySelector('#user-input');

  sendBtn?.addEventListener('click', async () => {
    const prompt = userInput.value;
    if (!prompt.trim()) return;

    chatBox.innerHTML += `<div class="user-msg"><strong>Vous :</strong> ${prompt}</div>`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      chatBox.innerHTML += `<div class="bot-msg"><strong>Assistant :</strong> ${data.response}</div>`;
    } catch (e) {
      chatBox.innerHTML += `<div class="bot-msg"><strong>Erreur :</strong> Impossible de contacter le serveur.</div>`;
    }

    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  });
}
