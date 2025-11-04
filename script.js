const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('open');
  nav.classList.remove('active');
  overlay.classList.remove('active');
});

// اذهب لتسجيل حساب في https://www.emailjs.com/
emailjs.init("ei6JrJjIPhh4WWyQm");

document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    emailjs.sendForm('service_xfr97tr', 'template_mbirxv8', this)
        .then(function(){
            alert('Message sent successfully!');
        }, function(error){
            alert('Oops... ' + JSON.stringify(error));
        });
});
