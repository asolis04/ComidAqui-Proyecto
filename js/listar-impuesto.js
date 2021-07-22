'use strict';

//Funcion para mostrar los datos
const tabla = document.querySelector('#tblImpuesto tbody');
const inputFiltro = document.querySelector('#txtFiltro');
let coleccionImpuesto = obtenerImpuesto();


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

const mostrarImpuesto = () => {

    tabla.innerHTML = '';

    //Iterar sobre una coleccion de datos
    coleccionImpuesto.forEach(objImpuesto => {
        let filtro = inputFiltro.value.toLowerCase();
        if (objImpuesto.nombreImpuesto.toLowerCase().includes(filtro) || objImpuesto.montoImpuesto.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = objImpuesto.nombreImpuesto;
            fila.insertCell().innerHTML = objImpuesto.montoImpuesto;

        }
    });
};

mostrarImpuesto();

inputFiltro.addEventListener('keyup', mostrarImpuesto);