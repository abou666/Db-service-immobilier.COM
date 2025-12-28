<!-- DB-Assistant IA universel (chatbot) -->
<script>
(function(){
  // Widget IA DB-Assistant (universel)
  const style = document.createElement('style');
  style.innerHTML = `
    #db-assistant-btn {position:fixed;bottom:32px;right:32px;z-index:9999;background:#0b6623;color:#fff;border:none;border-radius:50%;width:64px;height:64px;box-shadow:0 2px 12px #0003;font-size:2.2rem;cursor:pointer;transition:box-shadow .2s;}
    #db-assistant-btn:hover {box-shadow:0 4px 24px #0b662380;}
    #db-assistant-chat {position:fixed;bottom:110px;right:32px;z-index:9999;width:350px;max-width:95vw;background:#fff;border-radius:16px;box-shadow:0 2px 24px #0004;display:none;flex-direction:column;overflow:hidden;}
    #db-assistant-header {background:#0b6623;color:#fff;padding:16px;font-weight:bold;}
    #db-assistant-messages {padding:16px;height:260px;overflow-y:auto;font-size:1rem;}
    #db-assistant-input {display:flex;border-top:1px solid #eee;}
    #db-assistant-input input {flex:1;padding:12px;border:none;font-size:1rem;}
    #db-assistant-input button {background:#0b6623;color:#fff;border:none;padding:0 18px;cursor:pointer;}
  `;
  document.head.appendChild(style);
  // Bouton flottant
  const btn = document.createElement('button');
  btn.id = 'db-assistant-btn';
  btn.title = 'DB-Assistant IA';
  btn.innerHTML = '🤖';
  document.body.appendChild(btn);
  // Fenêtre chat
  const chat = document.createElement('div');
  chat.id = 'db-assistant-chat';
  chat.innerHTML = `
    <div id="db-assistant-header">DB-Assistant IA</div>
    <div id="db-assistant-messages"><div style='color:#888'>Posez-moi n'importe quelle question sur l'immobilier, le SIG, le paiement, etc.</div></div>
    <form id="db-assistant-input"><input type="text" placeholder="Votre question..." autocomplete="off"><button>Envoyer</button></form>
  `;
  document.body.appendChild(chat);
  // Toggle chat
  btn.onclick = () => { chat.style.display = chat.style.display==='flex' ? 'none' : 'flex'; };
  // Gestion envoi
  const form = chat.querySelector('form');
  const input = form.querySelector('input');
  const messages = chat.querySelector('#db-assistant-messages');
  form.onsubmit = async function(e) {
    e.preventDefault();
    const q = input.value.trim();
    if(!q) return;
    messages.innerHTML += `<div style='margin:8px 0;'><b>Vous :</b> ${q}</div>`;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
    // Appel API IA (remplacer par backend réel)
    messages.innerHTML += `<div style='margin:8px 0;color:#0b6623;'><b>DB-Assistant :</b> <span>Réponse intelligente en cours...</span></div>`;
    messages.scrollTop = messages.scrollHeight;
    // Simulation réponse IA universelle
    setTimeout(()=>{
      messages.innerHTML += `<div style='margin:8px 0;color:#0b6623;'><b>DB-Assistant :</b> <span>Je peux répondre à toutes vos questions sur l'immobilier, la géomatique, le paiement, la gestion de plans, etc. (Démo IA universelle, connectez-moi à une API IA pour des réponses réelles !)</span></div>`;
      messages.scrollTop = messages.scrollHeight;
    }, 1200);
  };
})();
</script>
