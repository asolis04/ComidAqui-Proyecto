'use strict';


let listaUsuarios = [{
    nombreDelRestaurante: 'Chilis',
    comentarios: 'Restaurant de cortes de carne y cocina mexicana de mediana calidad y  buen servicio, precios altos de las bebidas y algunos platillos.',
}, {
    nombreDelRestaurante: 'La Parrillita de Pepe',
    comentarios: 'Un restaurante bonito, comida deliciosa, precios intermedios, ubicaciones muy centricas cerca de parada de buses, taxis y parqueo disponible.',
}, {
    nombreDelRestaurante: 'Restaurante Nuestra Tierra',
    comentarios: ' Un restaurante bastante agradable sus camareros te hacen sentir bienvenido a su país y su comida deliciosa la cuál te explican como la preparan, en verdad un lugar recomendable para ir a comer',
}, {
    nombreDelRestaurante: 'Tin Jo',
    comentarios: 'Excelente servicio, la comida ha sido igual de deliciosa que hace más de 10 años que vengo. Todos los protocolos de Salud.',
}, {
    nombreDelRestaurante: 'Tsunami Sushi',
    comentarios: 'Casi todo estub muy rico lo unico fue que pedi un nigiri de pulpo y el pulpo.estaba tieso y sin sabor lo demas muy bueno .',
}];
const obtenerUsuarios = () => {
    return listaUsuarios;
};

const validarCredenciales = (correo, contrasenna) => {
    let listaUsuarios = obtenerUsuarios();
    let autenticado = false;
    let msjError = 'El usuario o contrasena incorreta'

    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if ((usuario.contrasenna == contrasenna) && (usuario.estado == 1)) {
                localStorage.setItem('usuarioConectado', JSON.stringify(usu));
                autenticado = true;
            }
        } else {
            if (usuario.estado != 1) {
                msjError = 'El usuario se encuentra inactivos o pendiende de confirmarcion '
            }

        }
    });
    if (autenticado == true) {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión correcto'
        }).then(() => {
                window.location.href = 'dashword.html';
            }


        )
    } else {
        Swal.fire({
            icon: 'error',
            title: 'No se pudo iniciar la sesión',
            text: msjError
        });
    }

};