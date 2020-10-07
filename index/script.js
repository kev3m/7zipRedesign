const navSlide = () => {

    const burguer = document.querySelector('.hamburguer');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    /* Esconder barra */
    burguer.addEventListener('click', () => {
        burguer.classList.toggle('active');
        nav.classList.toggle('active');
    })

}
navSlide();

/* Animação botão download */
const downbutton = document.querySelectorAll('.download');
downbutton.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let x = e.client - e.target.offsetLeft;
        let y = e.client - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples)

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    })
})
