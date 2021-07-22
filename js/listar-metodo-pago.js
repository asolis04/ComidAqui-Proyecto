'use strict';

//Funcion para mostrar los datos
const tabla = document.querySelector('#tblTarjetas tbody');
const inputFiltro = document.querySelector('#txtFiltro');
let coleccionMetodosPagos = obtenerMetodosPago();

const mostrarMetodosPago = () => {

    tabla.innerHTML = '';

    //Iterar sobre una coleccion de datos
    coleccionMetodosPagos.forEach(objTarjeta => {
        let filtro = inputFiltro.value.toLowerCase();
        if (objTarjeta.tipoTarjeta.toLowerCase().includes(filtro) || objTarjeta.numeroTarjeta.toLowerCase().includes(filtro) || objTarjeta.nombreTarjeta.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = objTarjeta.tipoTarjeta;
            fila.insertCell().innerHTML = objTarjeta.numeroTarjeta;
            fila.insertCell().innerHTML = objTarjeta.fechaExpiracion;
            fila.insertCell().innerHTML = objTarjeta.nombreTarjeta;
        }
    });
};

mostrarMetodosPago();

inputFiltro.addEventListener('keyup', mostrarMetodosPago);