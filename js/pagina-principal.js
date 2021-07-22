'use strict'
/*Mostrar cuando la pantalla es menor a 700 el menú*/
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
});

/*Aparezca todo poco a poco en el main page */
ScrollReveal().reveal('.header-welcome');
ScrollReveal().reveal('.restaurante-card', { delay: 200 });
ScrollReveal().reveal('.servicios-card', { delay: 200 });
ScrollReveal().reveal('.banner', { delay: 200 });
ScrollReveal().reveal('.cards-banner-one', { delay: 200 });
ScrollReveal().reveal('.form-nosotros', { delay: 200 });
ScrollReveal().reveal('.social', { delay: 200 });

/*Validar el formulario que registrar el restaurante */
const camposRequeridos = document.querySelectorAll('#frm-registreRestaurante :required');
const btnEnviarInfo = document.querySelector('#btn');

/*Llamar al formulatio de Register */
const register = document.getElementById('register');
const registerContainer = document.getElementById('register-container');
const closeRegister = document.getElementById('close-register');
const btnRegistrar = document.querySelector('#enviar-register');
const inputNombre = document.querySelector('#name-registro');
const inputCorreo = document.querySelector('#email-registro');
const inputFechaNacimiento = document.querySelector('#fecha-nacimientoR');
const inputTipoUsuario = document.querySelector('#tipo-usuarioR');

/*Variables para el login */
const login = document.getElementById('login');
const loginContainer = document.getElementById('login-container');
const closeLogin = document.getElementById('close-login');
const btnLogin = document.querySelector('#enviar-login');
const inputCorreoLogin = document.querySelector('#email-Login');
const inputContrasenna = document.querySelector('#contrasenna-login');

/*Cuando selecciona crear cuenta, llama al formulario de Registrar */
const cuentaNueva = document.getElementById('cuentaNueva');
/*En el Formulario */
const registerSecond = document.getElementById('registerSecond');
const inicioSecond = document.getElementById('inicioSecond');

let ojito = document.querySelector('#btnOjito');





/*Variables para olvido contraseña*/
const pwdOlvido = document.getElementById('olvido-pwd');
const pwdContainer = document.getElementById('pwd-container');
const closePwd = document.getElementById('close-pwd');
const btnpwd = document.querySelector('#enviar-pwd');
const inputCorreoPwd = document.querySelector('#email-pwd');


/*Llamar al formulario de Register */
cuentaNueva.addEventListener('click', () => {
    loginContainer.classList.remove('showLogin');
    registerContainer.classList.add('showRegister');
});

register.addEventListener('click', () => {
    registerContainer.classList.add('showRegister');
});
registerSecond.addEventListener('click', () => {
    registerContainer.classList.add('showRegister');
});


closeRegister.addEventListener('click', () => {
    registerContainer.classList.remove('showRegister');
});


/*Llamar al formulario de login */


login.addEventListener('click', () => {
    loginContainer.classList.add('showLogin');
});

inicioSecond.addEventListener('click', () => {
    loginContainer.classList.add('showLogin');
});

closeLogin.addEventListener('click', () => {
    loginContainer.classList.remove('showLogin');
});



/*Llamar al formulario de Olvido contraseña */


pwdOlvido.addEventListener('click', () => {
    pwdContainer.classList.add('showPwd');
});

closePwd.addEventListener('click', () => {
    pwdContainer.classList.remove('showPwd');
});



/*Validar formulario de registro */
const validarRegistro = () => {
    let error = false

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error')
    } else {
        inputNombre.classList.remove('error')
    }

    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('error')
    } else {
        inputCorreo.classList.remove('error')
    }

    if (inputFechaNacimiento.value == '') {
        error = true;

        inputFechaNacimiento.classList.add('error')
    } else {
        inputFechaNacimiento.classList.remove('error')
    }

    if (inputTipoUsuario.value == '') {
        error = true;
        inputTipoUsuario.classList.add('error')
    } else {
        inputTipoUsuario.classList.remove('error')
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos incompletos',
            'text': 'Por favor revise que todos los campos sean completados.',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Registro exitoso',
            'text': 'Un código ha sido enviado a su correo, utilícelo para el primer ingreso. ',
            'confirmButtonText': registrado()
        });
        login.addEventListener('click', () => {

        });
        /* obtenerDatos();*/
    };

};

/*Validar formulario de Login */
const validarLogin = () => {
    let error = false

    if (inputCorreoLogin.value == '') {
        error = true;
        inputCorreoLogin.classList.add('error')
    } else {
        inputCorreoLogin.classList.remove('error')
    }

    if (inputContrasenna.value == '') {
        error = true;
        inputContrasenna.classList.add('error')
    } else {
        inputContrasenna.classList.remove('error')
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos incorrectos',
            'text': 'Por favor revise que todos los campos sean completados.',
            'confirmButtonText': 'Entendido'
        });
    } else {
        validarCredenciales(inputCorreoLogin.value, inputContrasenna.value);

    };
};

/*Validar correo */
const validarCorreo = () => {
    let error = false

    if (inputCorreoPwd.value == '') {
        error = true;
        inputCorreoPwd.classList.add('error')
    } else {
        inputCorreoPwd.classList.remove('error')
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos incorrectos',
            'text': 'Por favor revise que el campo del correo no este vacio.',
            'confirmButtonText': 'Entendido'
        });
    } else {
        validarSoloCorreo(inputCorreoPwd.value);
        pwdContainer.classList.remove('showPwd');

    };
};

/*Validar Restaurante */
const validarRegistroRestaurante = () => {
    let error = false;

    camposRequeridos.forEach(campo => {
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
            title: 'No se pudo enviar la información',
            text: 'Por Favor ingrese todos los datos'
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Información enviada',
            text: 'Información enviada'
        });
        camposRequeridos.values = "";


    }
};

const mostrarPswd = () => {

    let inputPswd = document.querySelector('#contrasenna-login');
    if (inputPswd.type == 'password') {
        inputPswd.type = 'text';
        ojito.classList.remove('fa-eye');
        ojito.classList.add('fa-eye-slash');
    } else {
        inputPswd.type = 'password';
        ojito.classList.add('fa-eye');
        ojito.classList.remove('fa-eye-slash');
    }

}


const registrado = () => {
    loginContainer.classList.add('showLogin'),
        registerContainer.classList.remove('showRegister')
};

btnRegistrar.addEventListener('click', validarRegistro);

btnLogin.addEventListener('click', validarLogin);

btnpwd.addEventListener('click', validarCorreo);

btnEnviarInfo.addEventListener('click', validarRegistroRestaurante);

ojito.addEventListener('click', mostrarPswd);