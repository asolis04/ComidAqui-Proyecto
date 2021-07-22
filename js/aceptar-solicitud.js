'use strict';

let listaSolicitudes = [{
        nombre: 'Ada Calderón Olivares',
        correo: 'acalderon@gmail.com',

    },
    {
        nombre: 'Andre Fallas',
        correo: 'afallas@gmail.com',

    },


]

const obtenerSolicitudes = () => {

    return listaSolicitudes;
};

//Funcion para mostrar los datos
const tabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let coleccionSolicitudes = obtenerSolicitudes();

const btnaceptar = document.getElementById('boton-agregar');
const btnrechazar = document.getElementById('boton-eliminar');



const mostrarSolicitudes = () => {

    tabla.innerHTML = '';

    //Iterar sobre una coleccion de datos
    coleccionSolicitudes.forEach(objSolicitudes => {
        let filtro = inputFiltro.value.toLowerCase();
        if (objSolicitudes.nombre.toLowerCase().includes(filtro) || objSolicitudes.correo.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = objSolicitudes.nombre;
            fila.insertCell().innerHTML = objSolicitudes.correo;

        }
    });
};

mostrarSolicitudes();

inputFiltro.addEventListener('keyup', mostrarSolicitudes);


/*Llamar los formularios del usuario ya sea listar o configurar */
btnaceptar.addEventListener('click', () => {
    Swal.fire({
        'icon': 'success',
        'title': 'Usuario Aceptado',
        'text': 'Se ha aceptado al usuario correctamente',
        'confirmButtonText': 'Entendido'
    });
});

btnrechazar.addEventListener('click', () => {
    Swal.fire({
        'icon': 'warning',
        'title': 'Usuario rechazado',
        'text': 'No se ha ceptado al usuario',
        'confirmButtonText': 'Entendido'
    });
});