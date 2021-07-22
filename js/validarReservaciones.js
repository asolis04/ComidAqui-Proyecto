const inputDia = document.querySelector('#seleccionarDia');
const inputHora = document.querySelector('#seleccionarHora');
const nombreCompleto = document.querySelector('#nombreCompleto');
const seleccioneRestaurante = document.querySelector('#seleccioneRestaurante');
const cantidPersonas = document.querySelector('#cantidPersonas');
const btnReservar = document.querySelector('#btn-reservar');

const validar = () => {
    let error = false;

    if (inputDia.value == 0) {
        error = true;
        inputDia.classList.add('error');
    } else inputDia.classList.remove('error');

    if (inputHora.value == 0) {
        error = true;
        inputHora.classList.add('error');
    } else inputHora.classList.remove('error');

    if (nombreCompleto.value == "") {
        error = true;
        nombreCompleto.classList.add('error');
    } else nombreCompleto.classList.remove('error');

    if (seleccioneRestaurante.value == 0) {
        error = true;
        seleccioneRestaurante.classList.add('error');
    } else seleccioneRestaurante.classList.remove('error');

    if (cantidPersonas.value == "") {
        error = true;
        cantidPersonas.classList.add('error');
    } else cantidPersonas.classList.remove('error');

    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo realizar la reservación',
            text: 'Por Favor ingrese todos los datos'
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Reservación Confirmada!',
            text: 'Su número de reservación es 001'
        });

    }

};

btnReservar.addEventListener('click', validar);