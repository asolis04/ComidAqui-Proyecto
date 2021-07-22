'use strict';
const tabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let listaGobalDeUsuarios = obtenerUsuarios();


const mostarUsuarios = () => {

    tabla.innerHTML = '';
    //limpiar tabla

    listaGobalDeUsuarios.forEach(objUsuario => {
        //filtrar 
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = objUsuario.nombreDelGerente;
        fila.insertCell().innerHTML = objUsuario.correo;
        fila.insertCell().innerHTML = objUsuario.restaurante;
    });

};

const confEncargados = document.getElementById('conf-encargados');
const botonConfig = document.getElementById('boton-config');
const listarEncargados = document.getElementById('listar-encargados');
const botonListar = document.getElementById('boton-listar');


listarEncargados.classList.add('ocultar');
/*Llamar los formularios del usuario ya sea listar o configurar */
botonConfig.addEventListener('click', () => {
    confEncargados.classList.remove('ocultar');
    listarEncargados.classList.add('ocultar');
});
botonListar.addEventListener('click', () => {
    listarEncargados.classList.remove('ocultar');
    confEncargados.classList.add('ocultar');
});
mostarUsuarios() //invocarla