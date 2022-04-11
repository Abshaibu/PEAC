const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
const links = document.querySelectorAll('.nav-link');

// menu toggler
// toggleBtn.addEventListener('click', (e) => {
//     navLinks.classList.add('show-navlinks');
// });

// closeBtn.addEventListener('click', (e) => {
//     navLinks.classList.remove('show-navlinks');
// });

//  scroll to specific section
// links.forEach((item) => {
//     item.addEventListener('click', () => {
//         navLinks.classList.remove('show-navlinks');

//     });
// });


// showing and hiding links and drop down
const dropLink = document.querySelector('.drop-link');
const dropAbout = document.querySelector('.drop-about');
const dropMenu = document.querySelector('.drop-menu');
dropAbout.addEventListener('click', () => {
    dropMenu.style.display = 'none';
})

dropLink.addEventListener('mousedown', () => { 
    dropMenu.style.display = 'block';
})

// date
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();
