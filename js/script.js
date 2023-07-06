// =============toggle icon navbar========
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};


// =============scroll sections active link========

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.scroll = () => {
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']'). classList.add('active');
})
    };
})

// =============scroll sections active link========

let header = document.querySelector('header');
header.classList.toggle('stick', window.scrollY > 100);

// =============remove toggle icon and navbar when click navbar (scroll)========
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}

// =============scroll reveal========
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    delay: 200,
    duration: 2000
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'left'});

// =============typed js========
const typed = new Typed('.multiple-text', {
    strings: ['Mobile Application Developer', 'Systems Developer', 'Front-End-Developer'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// =============sending of email========
function sendEmail(){

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;
    
    // Check if any of the fields are empty
    if (!name || !mobile|| !email || !subject || !body) {
        alert('Please fill in all the fields');
        return;
    }
    
    // Check if the email is valid
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Send the email
    window.location.assign("mailto:hapanamambod@africau.edu?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body));
    
    // Show success message
    alert('Message sent successfully!');
}

function isValidEmail(email) {
    // we now use a regular expression to validate the email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// =============Read nore option========
function readMore(){
 var more = document.getElementById('more');
 var button = document.getElementsByTagName('button')[0];

 if (more.style.display === "none"){
    more.style.display = "block";
    button.innerHTML = "Read Less";
 } else {
    more.style.display = "none";
    button.innerHTML = "Read More";
 }
}

// play sound on social media icons when clicked
function playSound(){
    var audio = document.getElementById("myAudio");
    audio.play();
}


// play sound on footer go top icon when clicked
function playSound2(){
    var audio = document.getElementById("audio2");
    audio.play();
}

// toggle dark mode

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});
