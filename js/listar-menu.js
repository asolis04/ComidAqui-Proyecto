'use strict';

//Funcion para mostrar los datos
const tabla = document.querySelector('#tblMenus tbody');
const inputFiltro = document.querySelector('#txtFiltro');
let coleccionMenus = obtenerMenus();

const mostrarMenus = () => {

    tabla.innerHTML = '';

    //Iterar sobre una coleccion de datos
    coleccionMenus.forEach(objmenu => {
        let filtro = inputFiltro.value.toLowerCase();
        if (objmenu.nombre.toLowerCase().includes(filtro) || objmenu.descripcion.toLowerCase().includes(filtro) || objmenu.platosincluir.toLowerCase().includes(filtro) || objmenu.platosincluir2.toLowerCase().includes(filtro) || objmenu.platosincluir3.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = objmenu.nombre;
            fila.insertCell().innerHTML = objmenu.descripcion;
            fila.insertCell().innerHTML = objmenu.platosincluir;
            fila.insertCell().innerHTML = objmenu.platosincluir2;
            fila.insertCell().innerHTML = objmenu.platosincluir3;
        }
    });
};

mostrarMenus();

inputFiltro.addEventListener('keyup', mostrarMenus);