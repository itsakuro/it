const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});