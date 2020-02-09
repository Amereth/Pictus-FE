const burger = document.querySelector('.mob-header__burger');

burger.addEventListener('click', moveMenu);

function moveMenu () {
    const menu = document.querySelector('.mob-menu');
    
    if (menu.style.right === '' || menu.style.right === '-400px') {
        menu.style.display = 'block';
        setTimeout(() => menu.style.right = 0, 0)
    } else {
        menu.style.right = '-400px';
        setTimeout(() => menu.style.display = 'none', 500)
    }
}