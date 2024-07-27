document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
});

async function sendEmail(event) {
    event.preventDefault();
   
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
   
    try {
        const response = await emailjs.send("service_41xpzos", "template_aa6k3ep", {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            message: formData.get('message'),
            reply_to: formData.get('email')
        });
       
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado con éxito!');
        form.reset();
    } catch (error) {
        console.log('FAILED...', error);
        alert('Error al enviar el mensaje: ' + error.message);
    }

    return false;
}
