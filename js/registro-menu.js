'use strict';
let listaMenus = [{
    nombre: 'Desayuno',
    descripcion: 'Excelentes platillos para empezar el día',
    platosincluir: 'Gallo pinto',
    platosincluir2: 'Omelette',
    platosincluir3: 'Sandwich',
}, {
    nombre: 'Entradas',
    descripcion: 'Deliciosos aperitivos para compartir.',
    platosincluir: 'Papas fritas',
    platosincluir2: 'Patacones',
    platosincluir3: 'Pan de ajo',
}, {
    nombre: 'Ensaladas',
    descripcion: 'Las mejores opciones saludables y livianas',
    platosincluir: 'Ensalada César',
    platosincluir2: 'Ensalada Caprese',
    platosincluir3: 'Ensalada Griega',
}, {
    nombre: 'Platos fuertes',
    descripcion: 'Excelentes opciones para almuerzo o cena.',
    platosincluir: 'Casado',
    platosincluir2: 'Pasta Alfredo',
    platosincluir3: 'Filet de pescado',
}, {
    nombre: 'Postres',
    descripcion: 'Deliciosos postres para elegir.',
    platosincluir: 'Tiramisú',
    platosincluir2: 'Queque de chocolate',
    platosincluir3: 'Cheesecake',
}, ]
const obtenerMenus = () => {
    return listaMenus;
};
const inputNombre = document.querySelector('#txtNombre');
const inputDescripcion = document.querySelector('#txtDescripcion');
const inputPlatosIncluir = document.querySelector('#txtPlatos');
const btnRegistrar = document.querySelector('#btnRegistrar');


const confMenu = document.getElementById('conf-menu');
const botonConfig = document.getElementById('boton-config');
const listarMenu = document.getElementById('listar-menu');
const botonListar = document.getElementById('boton-listar');

listarMenu.classList.add('ocultar');
/*Llamar los formularios del usuario ya sea listar o configurar */
botonConfig.addEventListener('click', () => {
    confMenu.classList.remove('ocultar');
    listarMenu.classList.add('ocultar');
});
botonListar.addEventListener('click', () => {
    listarMenu.classList.remove('ocultar');
    confMenu.classList.add('ocultar');
});

const validar = () => {

    let error = false;
    if (inputNombre.value == "") {
        error = true;
        inputNombre.classList.add('error');
    } else inputNombre.classList.remove('error');


    if (inputDescripcion.value == "") {
        error = true;
        inputDescripcion.classList.add('error');
    } else inputDescripcion.classList.remove('error');

    if (inputPlatosIncluir.value == "") {
        error = true;
        inputPlatosIncluir.classList.add('error');
    } else inputPlatosIncluir.classList.remove('error');

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos incorrectos',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            console.log('Se cerró');
        });
    } else {
        obtenerMenu();
        Swal.fire({
            'icon': 'success',
            'title': 'Registro exitoso',
            'text': 'El menú ha sido agregado',
            'confirmButtonText': 'Entendido'
        })
    }



};


// Crear función
//Función 
const obtenerMenu = () => {
    //Enlazar botón 
    // Variables son locales en obtener datos 
    let nombre = inputNombre.value;

    let descripcion = inputDescripcion.value;

    let platosincluir = inputPlatosIncluir.value;

    console.log(nombre, descripcion, platosincluir);
    // Value saca el valor de la caja de texto



};
//Evento, cuando se le da click al botón se ejecuta la funcion de obtener datos 
btnRegistrar.addEventListener('click', validar);