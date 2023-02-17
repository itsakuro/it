const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuButton.classList.toggle('active');
    if (menu.classList.contains('active')) {
        menuButton.innerHTML = '<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.883 3.007 12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z" fill="#FFFFFF"/></svg>';
    } else {
        menuButton.innerHTML = '<svg width="32" height="32" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.753 18h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493L2.753 18h18.5-18.5Zm0-6.497h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493l.102-.007h18.5-18.5Zm-.001-6.5h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5A.75.75 0 0 1 2.65 5.01l.102-.007h18.5-18.5Z" fill="#FFFFFF"/></svg>';
    }
});



const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    updateNav();
});

function updateNav() {
    let marginTop = 22 - (window.scrollY / 3);
    let backgroundColor = `rgba(0, 0, 0, ${window.scrollY / 300})`;
    if (marginTop < 0) {
        marginTop = 0;
    }
    nav.style.marginTop = `${marginTop}px`;
    nav.style.backgroundColor = backgroundColor;
}

updateNav();