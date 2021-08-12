'use strict'
/*Mostrar cuando la pantalla es menor a 700 el menú*/
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
});