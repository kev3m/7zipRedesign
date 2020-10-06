const navSlide = () => {

    const burguer = document.querySelector('.hamburguer');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


/* Esconder barra */
burguer.addEventListener('click', () => {
    burguer.classList.toggle('active');
})

}
navSlide();