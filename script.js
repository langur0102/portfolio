let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nava');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href+=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form reload
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
  
    const whatsappNumber = "919431215791"; // Replace with your number (no + or spaces)
    const isMobile = /iPhone|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const fullMessage = `*New Contact Message from Portfolio*\n` +
                `*Name:* ${name}\n` +
                `*Email:* ${email}\n` +
                `*Phone:* ${phone}\n` +
                `*Subject:* ${subject}\n` +
                `*Message:* ${message}`;

    const url = isMobile
        ? `https://wa.me/${919431215791}?text=${encodeURIComponent(fullMessage)}`
        : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(fullMessage)}`;
window.open(url, "_blank");

});
  
  
  