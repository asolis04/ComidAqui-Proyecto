'use strict';

const confClasificacion = document.getElementById('conf-clasificacion-platos');
const listarClasificacion = document.getElementById('listar-clasificacion');
const botonListar = document.getElementById('boton-listar');
const botonConfig = document.getElementById('boton-config');

const tabla = document.querySelector('#tblClasificacion tbody');
const inputFiltro = document.querySelector('#txtFiltro');


listarClasificacion.classList.add('ocultar');
/*Llamar los formularios del usuario ya sea listar o configurar */
botonConfig.addEventListener('click', () => {
    confClasificacion.classList.remove('ocultar');
    listarClasificacion.classList.add('ocultar');
});
botonListar.addEventListener('click', () => {
    listarClasificacion.classList.remove('ocultar');
    confClasificacion.classList.add('ocultar');
});

let listaClasificacion = [{
    restaurante: 'La Parrillita de Pepe',
    plato: 'Gallo Pinto',
    caracteristica: 'Libre de Gluten',
    caracteristica1: 'Vegetariano',
    Clasificación: 'Desayuno',
}]

const obtenerClasificacion = () => {
    return listaClasificacion;
};

let coleccionClasificacion = obtenerClasificacion();
const mostrarClasificacion = () => {

    tabla.innerHTML = '';

    //Iterar sobre una coleccion de datos
    coleccionClasificacion.forEach(objPlato => {
        let filtro = inputFiltro.value.toLowerCase();
        if (objPlato.restaurante.toLowerCase().includes(filtro) || objPlato.plato.toLowerCase().includes(filtro) || objPlato.caracteristicas.toLowerCase().includes(filtro) || objPlato.clasificacion.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = objPlato.restaurante;
            fila.insertCell().innerHTML = objPlato.plato;
            fila.insertCell().innerHTML = objPlato.caracteristica;
            fila.insertCell().innerHTML = objPlato.caracteristica1;
            fila.insertCell().innerHTML = objPlato.Clasificación;
        }
    });
};

mostrarClasificacion();

inputFiltro.addEventListener('keyup', mostrarClasificacion);