'use strict';
const inputNombre = document.querySelector('#txtNombre');
const inputCorreo = document.querySelector('#txtCorreo');
const inputFechaNacimiento = document.querySelector('#txtNacimiento');
const inputTipoCedula = document.querySelector('#txtID');
const inputCedula = document.querySelector('#txtNumID');
const inputbtnRegistrar = document.querySelector('#btnRegistrar')
const confUsuarios = document.getElementById('conf-usuarios');
const botonConfig = document.getElementById('boton-config');
const listarusuarios = document.getElementById('listar-usuarios');
const botonListar = document.getElementById('boton-listar');

const validar = () => {

    let error = false;
    if (inputNombre.value == "") {
        error = true;
        inputNombre.classList.add('error');
    } else inputNombre.classList.remove('error');


    if (inputCorreo.value == "") {
        error = true;
        inputCorreo.classList.add('error');
    } else inputCorreo.classList.remove('error');


    if (inputFechaNacimiento.value == "") {
        error = true;
        inputFechaNacimiento.classList.add('error');
    } else inputFechaNacimiento.classList.remove('error');

    if (inputTipoCedula.value == "0") {
        error = true;
        inputTipoCedula.classList.add('error');
    } else inputTipoCedula.classList.remove('error');

    if (inputCedula.value == "") {
        error = true;
        inputCedula.classList.add('error');
    } else inputCedula.classList.remove('error');

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
        obtenerDatos();
        Swal.fire({
            'icon': 'success',
            'title': 'Actualización exitosa',
            'text': 'Los cambios han sido guardados',
            'confirmButtonText': 'Entendido'
        })
    }



};

listarusuarios.classList.add('ocultar');
/*Llamar los formularios del usuario ya sea listar o configurar */
botonConfig.addEventListener('click', () => {
    confUsuarios.classList.remove('ocultar');
    listarusuarios.classList.add('ocultar');
});
botonListar.addEventListener('click', () => {
    listarusuarios.classList.remove('ocultar');
    confUsuarios.classList.add('ocultar');
});

// Crear función
//Función 
const obtenerDatos = () => {
    //Enlazar botón 
    // Variables son locales en obtener datos 
    let nombre = inputNombre.value;

    let correo = inputCorreo.value;

    let fechaNacimiento = inputFechaNacimiento.value;

    let tipoCedula = inputTipoCedula.value;

    let cedula = inputCedula.value;

    console.log(nombre, correo, fechaNacimiento, tipoCedula, cedula);
    // Value saca el valor de la caja de texto



};
//Evento, cuando se le da click al botón se ejecuta la funcion de obtener datos  
btnRegistrar.addEventListener('click', validar);