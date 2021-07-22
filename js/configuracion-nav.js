'use strict';
/*Para los enlaces del nav  */
const enlaceUsuarios = document.querySelector('#adm-usuarios');
const enlaceAceptarUsuario = document.querySelector('#aceptar-usuarios');
const enlaceImpuesto = document.querySelector('#admin-impuestos');
const enlaceTiempoReserva = document.querySelector('#admin-tiempoReserva');
const enlaceConfigPlatos = document.querySelector('#configuracion-platos');
const enlaceMenu = document.querySelector('#admin-menu');
const enlaceRestaurante = document.querySelector('#admin-restaurante');
const enlaceGerente = document.querySelector('#admin-gerente');
const enlaceComentarios = document.querySelector('#admin-comentarios');
const enlaceReportes = document.querySelector('#admin-reportes');
const enlaceCerrar = document.querySelector('#enlaceCerrar');

/*Para las funcionalidades */

let usuarioSesionNav = JSON.parse(localStorage.getItem('usuarioConectado'));

/*Ocultar los enlaces */
if (!usuarioSesionNav) {
    window.location.href = 'index.html';

} else {
    switch (usuarioSesionNav.rol) {
        case 'encargado':
            enlaceUsuarios.classList.add('ocultar');
            enlaceAceptarUsuario.classList.add('ocultar');
            enlaceImpuesto.classList.add('ocultar');
            enlaceTiempoReserva.classList.add('ocultar');
            enlaceConfigPlatos.classList.add('ocultar');
            enlaceComentarios.classList.add('ocultar');
            enlaceGerente.classList.add('ocultar')
            break;
        case 'dueno':
            enlaceUsuarios.classList.add('ocultar');
            enlaceAceptarUsuario.classList.add('ocultar');
            enlaceImpuesto.classList.add('ocultar');
            enlaceTiempoReserva.classList.add('ocultar');
            enlaceConfigPlatos.classList.add('ocultar');
            enlaceComentarios.classList.add('ocultar');
            break;
    }
}

console.log(usuarioSesionNav)

/*Ocultar las páginas */
enlaceCerrar.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'index.html';
})