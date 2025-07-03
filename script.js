const menuButtons = document.querySelectorAll('button');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector("nav").classList.toggle('active');
    });
});