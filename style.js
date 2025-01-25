// Smooth Scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  // Fungsi untuk menampilkan Chatbot
function openChat() {
    document.getElementById('chatbot').style.display = 'block';
  }
  
  // Fungsi untuk menutup Chatbot
  function closeChat() {
    document.getElementById('chatbot').style.display = 'none';
  }
  
  // Fungsi untuk mengirim pesan
  function sendMessage() {
    var userMessage = document.getElementById('userInput').value;
    if (userMessage) {
      var chatBody = document.getElementById('chat-body');
      
      // Menampilkan pesan pengguna
      chatBody.innerHTML += '<p><b>Anda:</b> ' + userMessage + '</p>';
      
      // Simulasi respon chatbot
      var botResponse = 'Terima kasih telah menghubungi kami! Kami akan segera merespons.';
      chatBody.innerHTML += '<p><b>Bot:</b> ' + botResponse + '</p>';
      
      // Scroll ke bawah chat
      chatBody.scrollTop = chatBody.scrollHeight;
      
      // Menghapus input
      document.getElementById('userInput').value = '';
    }
  }
  
  // Menampilkan chatbot saat pengguna mengklik tombol WhatsApp
  document.querySelector('.whatsapp-btn').addEventListener('click', openChat);
  