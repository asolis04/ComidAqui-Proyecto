const camposRequeridosInfo = document.querySelectorAll('#frm-info :required');
const btnInfo = document.querySelector('#btn');


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