'use strict';
const inputPagoSeleccionado = document.querySelector('#txtmetodoPago');
const btnPagarEnLinea = document.querySelector('#btnPagarEnLinea');
const btnPagarRestaurante = document.querySelector('#btnPagarRestaurante');

const validar = () => {

    let error = false;
    if (inputPagoSeleccionado.value == "0") {
        error = true;
        inputPagoSeleccionado.classList.add('error');
    } else inputPagoSeleccionado.classList.remove('error');

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Método de pago no seleccionado',
            'text': 'Por favor seleccione uno de los métodos de pago disponibles',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            console.log('Se cerró');
        });
    } else {
        obtenerDatos();
        Swal.fire({
            'icon': 'success',
            'title': 'Transferencia exitosa',
            'text': 'Se ha realizado el pago',
            'confirmButtonText': 'Ok'
        })
    }



};

const confirmar = () => {
    Swal.fire({
        'icon': 'info',
        'title': 'Confirmación de pago',
        'text': 'El pago se realizará en establecimiento',
        'confirmButtonText': 'Entendido'
    })
};


// Crear función
//Función 
const obtenerDatos = () => {
    //Enlazar botón 
    // Variables son locales en obtener datos  
    let pagoSeleccionado = inputPagoSeleccionado.value;

    console.log(pagoSeleccionado);
    // Value saca el valor de la caja de texto



};
//Evento, cuando se le da click al botón se ejecuta la funcion de obtener datos  
btnPagarEnLinea.addEventListener('click', validar);
btnPagarRestaurante.addEventListener('click', confirmar);