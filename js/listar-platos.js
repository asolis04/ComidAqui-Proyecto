'use strict';

//Funcion para mostrar los datos
const tabla = document.querySelector('#tblPlatos tbody');
const inputFiltro = document.querySelector('#txtFiltro');
let coleccionPlatos = obtenerPlatos();


const confPlatos = document.getElementById('conf-platos');
const listarPlatos = document.getElementById('listar-platos');
const botonListar = document.getElementById('boton-listar');
const botonConfig = document.getElementById('boton-config');


listarPlatos.classList.add('ocultar');
/*Llamar los formularios del usuario ya sea listar o configurar */
botonConfig.addEventListener('click', () => {
    confPlatos.classList.remove('ocultar');
    listarPlatos.classList.add('ocultar');
});
botonListar.addEventListener('click', () => {
    listarPlatos.classList.remove('ocultar');
    confPlatos.classList.add('ocultar');
});

const mostrarPlatos = () => {

    tabla.innerHTML = '';

    //Iterar sobre una coleccion de datos
    coleccionPlatos.forEach(objPlato => {
        let filtro = inputFiltro.value.toLowerCase();
        if (objPlato.nombre.toLowerCase().includes(filtro) || objPlato.descripcion.toLowerCase().includes(filtro) || objPlato.caracteristicas.toLowerCase().includes(filtro) || objPlato.clasificacion.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = objPlato.nombre;
            fila.insertCell().innerHTML = objPlato.descripcion;
            fila.insertCell().innerHTML = objPlato.precio;
            fila.insertCell().innerHTML = objPlato.caracteristicas;
            fila.insertCell().innerHTML = objPlato.clasificacion;
        }
    });
};

mostrarPlatos();

inputFiltro.addEventListener('keyup', mostrarPlatos);