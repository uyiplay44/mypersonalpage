const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav_links');

    hamburger.addEventListener('click',() => {
        nav.classList.toggle('nav_links active');
    })
};

navSlide();