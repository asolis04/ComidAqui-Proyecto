'use strict';

const perfilSuperAdmin = document.querySelector('#cod-superadmin-perfil');
const perfilEncargado = document.querySelector('#cod-encargado-perfil');
const perfilDueno = document.querySelector('#cod-dueno-perfil')
const perfilCliente = document.querySelector('#cod-cliente-perfil')



let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
if (!usuarioConectado) {
    window.location.href = 'index.html';

} else {
    switch (usuarioConectado.rol) {
        case 'administrador':
            perfilEncargado.classList.add('ocultar');
            perfilDueno.classList.add('ocultar');
            break;
        case 'encargado':
            perfilSuperAdmin.classList.add('ocultar');
            perfilDueno.classList.add('ocultar');
            break;
        case 'dueno':
            perfilEncargado.classList.add('ocultar');
            perfilSuperAdmin.classList.add('ocultar');
    }
}


/*
enlaceCerrar.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'index.html';
})*/