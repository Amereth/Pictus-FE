const menu = document.querySelector('.mob-menu');
menu.addEventListener('click', event => event.stopPropagation());

const burger = document.querySelector('.mob-header__burger');
burger.addEventListener('click', toggleMenu);

function toggleMenu (event) {
    event.stopPropagation();
    if (menu.style.right === '' || menu.style.right === '-400px') {
        menu.style.display = 'block';
        setTimeout(() => menu.style.right = 0, 0);
    } else {
        menu.style.right = '-400px';
        setTimeout(() => menu.style.display = 'none', 500);
    }
}

const body = document.querySelector('body');
body.addEventListener('click', closeMenu);

function closeMenu () {
    menu.style.right = '-400px';
    setTimeout(() => menu.style.display = 'none', 500);
}