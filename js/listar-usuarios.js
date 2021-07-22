'use strict';

//Funcion para mostrar los datos
const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');
let coleccionUsuarios = obtenerUsuarios();


/*
const confUsuarios = document.getElementById('conf-usuarios');
const listarUsuarios = document.getElementById('listar-usuarios');
const botonListar = document.getElementById('boton-listar');
const botonConfig = document.getElementById('boton-config');


listarUsuarios.classList.add('ocultar');
/*Llamar los formularios del usuario ya sea listar o configurar */
// botonConfig.addEventListener('click', () => {
//     confUsuarios.classList.remove('ocultar');
//     listarUsuarios.classList.add('ocultar');
// });
// botonListar.addEventListener('click', () => {
//     listarUsuarios.classList.remove('ocultar');
//     confUsuarios.classList.add('ocultar');
// })

const mostrarUsuarios = () => {

    tabla.innerHTML = '';

    //Iterar sobre una coleccion de datos
    coleccionUsuarios.forEach(objUsuario => {
        let filtro = inputFiltro.value.toLowerCase();
        if (objUsuario.nombre.toLowerCase().includes(filtro) || objUsuario.correo.toLowerCase().includes(filtro) || objUsuario.fechaNacimiento.toLowerCase().includes(filtro) || objUsuario.cedula.toLowerCase().includes(filtro) || objUsuario.rol.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = objUsuario.nombre;
            fila.insertCell().innerHTML = objUsuario.correo;
            fila.insertCell().innerHTML = objUsuario.fechaNacimiento;
            fila.insertCell().innerHTML = objUsuario.cedula;
            fila.insertCell().innerHTML = objUsuario.rol;
        }
    });
};

mostrarUsuarios();

inputFiltro.addEventListener('keyup', mostrarUsuarios);