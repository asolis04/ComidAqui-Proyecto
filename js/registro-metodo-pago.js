'use strict';

let listaMetodosPago = [{
    tipoTarjeta: 'Visa',
    numeroTarjeta: '9874 6312 5656 5046',
    fechaExpiracion: '01/07/2023',
    cvc: '320',
    nombreTarjeta: 'Kayla Baylis Fernández',
}, {
    tipoTarjeta: 'Master Card',
    numeroTarjeta: '3251 6561 9879 3203',
    fechaExpiracion: '01/02/2022',
    cvc: '651',
    nombreTarjeta: 'Kayla Baylis Fernández',
}, {
    tipoTarjeta: 'American Express',
    numeroTarjeta: '6555 3516 2135 5648',
    fechaExpiracion: '01/11/2024',
    cvc: '180',
    nombreTarjeta: 'Kayla Baylis Fernández',
}, ]
const obtenerMetodosPago = () => {
    return listaMetodosPago;
};

const inputTipoTarjeta = document.querySelector('#tipoTarjeta');
const inputNumeroTarjeta = document.querySelector('#numeroTarjeta');
const inputFechaExpiracion = document.querySelector('#fechaExpiracion');
const inputCVC = document.querySelector('#CVC');
const inputNombreTarjeta = document.querySelector('#nombreTarjeta');
const btnRegistrar = document.querySelector('#btnRegistrar');

const validar = () => {

    let error = false;
    if (inputTipoTarjeta.value == "") {
        error = true;
        inputTipoTarjeta.classList.add('error');
    } else inputTipoTarjeta.classList.remove('error');


    if (inputNumeroTarjeta.value == "") {
        error = true;
        inputNumeroTarjeta.classList.add('error');
    } else inputNumeroTarjeta.classList.remove('error');

    if (inputFechaExpiracion.value == "") {
        error = true;
        inputFechaExpiracion.classList.add('error');
    } else inputFechaExpiracion.classList.remove('error');

    if (inputCVC.value == "") {
        error = true;
        inputCVC.classList.add('error');
    } else inputCVC.classList.remove('error');

    if (inputNombreTarjeta.value == "") {
        error = true;
        inputNombreTarjeta.classList.add('error');
    } else inputNombreTarjeta.classList.remove('error');

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
        obtenerMetodoPago();
        Swal.fire({
            'icon': 'success',
            'title': 'Registro exitoso',
            'text': 'El método de pago ha sido agregado',
            'confirmButtonText': 'Entendido'
        })
    }



};


// Crear función
//Función 
const obtenerMetodoPago = () => {
    //Enlazar botón 
    // Variables son locales en obtener datos 
    let tipoTarjeta = inputTipoTarjeta.value;

    let numeroTarjeta = inputNumeroTarjeta.value;

    let fechaExpiracion = inputFechaExpiracion.value;

    let CVC = inputCVC.value;

    let nombreTarjeta = inputNombreTarjeta.value;

    console.log(tipoTarjeta, numeroTarjeta, fechaExpiracion, CVC, nombreTarjeta);
    // Value saca el valor de la caja de texto



};
//Evento, cuando se le da click al botón se ejecuta la funcion de obtener datos 
btnRegistrar.addEventListener('click', validar);


const confMetodoPago = document.getElementById('segundParte');
const listarMetodoPago = document.getElementById('listar-metodoPago');
const botonListar = document.getElementById('boton-listar');
const botonConfig = document.getElementById('boton-config');

listarMetodoPago.classList.add('ocultar');
/*Llamar los formularios del usuario ya sea listar o configurar */
botonConfig.addEventListener('click', () => {
    confMetodoPago.classList.remove('ocultar');
    listarMetodoPago.classList.add('ocultar');
});
botonListar.addEventListener('click', () => {
    listarMetodoPago.classList.remove('ocultar');
    confMetodoPago.classList.add('ocultar');
});