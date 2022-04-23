const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.cl-btn');
const links = document.querySelectorAll('.nav-link');

// menu toggler
toggleBtn.addEventListener('click', (e) => {
    navLinks.classList.add('show-navlinks');
    document.querySelector('.nav-list-container').style.display = 'block';
});

closeBtn.addEventListener('click', (e) => {
    navLinks.classList.remove('show-navlinks');
    document.querySelector('.nav-list-container').style.display = 'none';
});

// close menu when clicking on a link
links.forEach((item) => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show-navlinks');
    });
});

// date
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

// products tabs
$(document).ready(function () {
    $('.tab-a').click(function () {
        $(".tab").removeClass('tab-active');
        $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
        $(".tab-a").removeClass('active-a');
        $(this).parent().find(".tab-a").addClass('active-a');
    });
});