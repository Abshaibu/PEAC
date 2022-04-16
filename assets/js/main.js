const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.cl-btn');
const productBtn = document.querySelectorAll('.product-btn');
const prdTwo = document.querySelectorAll('.prd-two');
const orderMessage = document.querySelector('.order-message');
const messageBtn = document.querySelector('.message-btn');
const links = document.querySelectorAll('.nav-link');

// products tabs
$(document).ready(function () {
    $('.tab-a').click(function () {
        $(".tab").removeClass('tab-active');
        $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
        $(".tab-a").removeClass('active-a');
        $(this).parent().find(".tab-a").addClass('active-a');
    });
});

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

// message on order
productBtn.forEach((item) => {
    item.addEventListener('click', () => {
        orderMessage.classList.add('show-order');
    });
});

messageBtn.addEventListener('click', () => { 
    orderMessage.classList.remove('show-order');
});

orderMessage.addEventListener('click', () => {
    orderMessage.classList.remove('show-order');
});

// products overview
prdTwo.forEach((item) => {
    item.addEventListener('click', () => {
        orderMessage.classList.add('show-order');
    });
});

// date
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();