const btnMenuMobile = document.querySelector('.menu-mobile');

const menu = document.querySelector('.menu');
const iconeMenu = document.querySelector('.icone-menu');

btnMenuMobile.addEventListener('click', () => {
    if (menu.classList.contains('mostra-menu')) {
        menu.classList.remove('mostra-menu')
        iconeMenu.src = 'imagens/botaored.png'
    } else {
        menu.classList.add('mostra-menu')
        iconeMenu.src = 'imagens/close.svg'
    }
})