const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    event.preventDefault();

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const isActive = nav.classList.contains('active');
    btnMobile.setAttribute('aria-expanded', isActive);
}

btnMobile.addEventListener('click', toggleMenu);

btnMobile.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        toggleMenu(event);
    }
});
