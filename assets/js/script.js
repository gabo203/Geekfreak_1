document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
});


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_9in0s6f';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Mensaje Enviado';
      alert('Mensaje Enviado!');
    }, (err) => {
      btn.value = 'Mensaje Enviado';
      alert(JSON.stringify(err));
    });
});

const submitButton = document.getElementById('button');

submitButton.addEventListener('mouseenter', () => {
    submitButton.style.transform = 'scale(1.05)';
});

submitButton.addEventListener('mouseleave', () => {
    submitButton.style.transform = 'scale(1)';
});

submitButton.addEventListener('click', () => {
    submitButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        submitButton.style.transform = 'scale(1)';
    }, 100);
});