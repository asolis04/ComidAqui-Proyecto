'use strict';
const inputNombre = document.querySelector('#txtNombre');
const inputCorreo = document.querySelector('#txtCorreo');
const inputFechaNacimiento = document.querySelector('#txtFechaNac');
const inputTipoCedula = document.querySelector('#txtTipoCedula');
const inputCedula = document.querySelector('#txtCedula');
const inputContrasenha = document.querySelector('#txtContrasenha');
const btnGuardar = document.querySelector('#btnGuadar');

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

    if (inputContrasenha.value == "") {
        error = true;
        inputContrasenha.classList.add('error');
    } else inputContrasenha.classList.remove('error');

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

    let contrasenha = inputContrasenha.value;

    console.log(nombre, correo, fechaNacimiento, tipoCedula, cedula, contrasenha);
    // Value saca el valor de la caja de texto



};
//Evento, cuando se le da click al botón se ejecuta la funcion de obtener datos  
btnGuardar.addEventListener('click', validar);