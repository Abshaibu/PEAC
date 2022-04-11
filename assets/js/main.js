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


// date
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();
