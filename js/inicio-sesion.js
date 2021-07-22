'use strict';
// Estados
// 1 -> activo
// 2 -> inactivo
// 3 -> pendiente de aceptación
// 4 -> vetado
// 5 -> pendiente de cambio de contraseña

let listaUsuarios = [{
        nombre: 'Ana Solís Rostrán',
        correo: 'asolis@gmail.com',
        telefono: '83031506',
        fechaNacimiento: '10-Feb-1993',
        cedula: '2-0689-0142',
        contrasenna: 'S1a$',
        rol: 'administrador',
        estado: 1
    },
    {
        nombre: 'Ada Calderón Olivares',
        correo: 'acalderon@gmail.com',
        telefono: '88751423',
        fechaNacimiento: '9-Dec-1995',
        cedula: '1-0987-0142',
        contrasenna: 'C2f@',
        rol: 'dueno',
        estado: 1
    },

    {
        nombre: 'Kayla Baylis Fernández',
        correo: 'kbaylis@gmail.com',
        fechaNacimiento: '6-Oct-1990',
        telefono: '98651402',
        cedula: '1-0987-0874',
        contrasenna: 'B2k%',
        rol: 'cliente',
        estado: 1,
        favoritos: {
            "restauranteUno": "Nuestra Tierra",
            "restauranteDos": "Tin Jo",
            "restauranteTres": "La Parillita"
        }
    },
    {
        nombre: 'Danny Cruz González',
        correo: 'dcruz@gmail.com',
        telefono: '96021485',
        fechaNacimiento: '8-Mar-1999',
        cedula: '1-0787-0874',
        contrasenna: 'C3d$',
        rol: 'cliente',
        estado: 2,
        favoritos: {
            restauranteUno: 'Nuestra Tierra',
            restauranteDos: 'Tin Jo',
            restauranteTres: 'La Parillita'
        }
    },
    {
        nombre: 'Vivian Martin Ramírez',
        correo: 'vMartin@gmail.com',
        telefono: '96021485',
        fechaNacimiento: '25-Sept-1990',
        cedula: '1-0787-0874',
        contrasenna: 'M4v&',
        rol: 'encargado',
        estado: 1
    },

]


const obtenerUsuarios = () => {
    return listaUsuarios;
};

const validarCredenciales = (correo, contrasenna) => {
    let listaUsuarios = obtenerUsuarios();
    let autenticado = false;
    let msjError = 'Usuario o contraseña incorrecta'
    let usuarioRoll = '';


    //Recorrer la lista de usuarioi
    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if ((usuario.contrasenna == contrasenna) && (usuario.estado == 1)) {
                localStorage.setItem('usuarioConectado', JSON.stringify(usuario))
                autenticado = true;
                usuarioRoll = usuario.rol;
            } else {
                if (usuario.estado != 1) {
                    msjError = 'El usuario se encuentra inactivo o pendiente de confirmación, por favor contacte al administrador de la aplicacion'

                }
            }
        }
    });
    if ((autenticado == true)) {
        if ((usuarioRoll == 'administrador'))
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión correcto'

            }).then(() => {
                window.location.href = 'perfiles.html';
            });
        if ((usuarioRoll == 'encargado'))
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión correcto'

            }).then(() => {
                window.location.href = 'perfiles.html';
            });
        if ((usuarioRoll == 'cliente')) {
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión correcto'

            }).then(() => {
                window.location.href = 'Pagina-inicio-cliente.html';
            });

        }
        if ((usuarioRoll == 'dueno')) {
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión correcto'

            }).then(() => {
                window.location.href = 'perfiles.html';
            });

        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Inicio de sesión incorrecto',
            text: msjError
        });

    }
};

const validarSoloCorreo = (correo) => {
    let listaUsuarios = obtenerUsuarios();
    let autenticado = false;
    let msjError = 'Correo no existe, en el sistema.'

    //Recorrer la lista de usuarioi
    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if ((usuario.estado == 1)) {
                localStorage.setItem('usuarioConectado', JSON.stringify(usuario))
                autenticado = true;
            } else {
                if (usuario.estado != 1) {
                    msjError = 'El usuario se encuentra inactivo o pendiente de confirmación, por favor contacte al administrador de la aplicacion'

                }
            }
        }
    });
    if (autenticado == true) {
        Swal.fire({
            icon: 'success',
            title: 'Correo Enviado, Revise su email e ingrese con el código enviado.'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Correo no existe.',
            text: msjError
        });

    }
};