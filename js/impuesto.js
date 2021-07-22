'use strict';

const confImpuesto = document.getElementById('conf-impuestos');
const listarImpuesto = document.getElementById('listar-impuestos');
const btnListarImpuesto = document.getElementById('btnListarImpuesto');
const btnConfiImpuesto = document.getElementById('btnConfiImpuesto');
const botonConfig = document.getElementById('admin-impuestos');

/*Llamar los formularios del usuario ya sea listar o configurar */
listarImpuesto.classList.add('ocultar');
btnListarImpuesto.addEventListener('click', () => {
    listarImpuesto.classList.remove('ocultar');
    confImpuesto.classList.add('ocultar');
});
btnConfiImpuesto.addEventListener('click', () => {
    listarImpuesto.classList.add('ocultar');
    confImpuesto.classList.remove('ocultar');
});



const camposRequeridosInfo = document.querySelectorAll('#frm-impuesto :required');
const btnInfo = document.querySelector('#btnRegistrar');


const validarInfo = () => {
    let error = false;

    camposRequeridosInfo.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error');
        } else {
            campo.classList.remove('error');
        }
    });
    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Faltan Datos requeridos!',
            text: 'Por Favor ingrese todos los datos'
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Información Enviada!',
            text: 'Su información se envío correctamente.'
        });

    }

    camposRequeridosInfo.values = "";
};

btnInfo.addEventListener('click', validarInfo);