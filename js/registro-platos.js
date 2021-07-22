'use strict';

let listaPlatos = [{
    nombre: 'Gallo Pinto',
    descripcion: 'Plato típico costarricense de arroz y frijoles',
    precio: '₡2,000',
    caracteristicas: 'Vegetariano',
    clasificacion: 'Desayuno',
}, {
    nombre: 'Omelette',
    descripcion: 'Tortilla de huevo rellena',
    precio: '₡3,000',
    caracteristicas: 'Huevo',
    clasificacion: 'Desayuno',
}, {
    nombre: 'Sandwich',
    descripcion: '2 rebanadas de pan, relleno con queso, lechuga, tomate, salsa, y jamón',
    precio: '₡2500',
    caracteristicas: 'Lácteos',
    caracteristicas: 'Gluten',
    clasificacion: 'Desayuno',
}, {
    nombre: 'Papas fritas',
    descripcion: 'Orden de papas fritas en aceite sazonadas, acompañadas de salsas',
    precio: '₡2,000',
    caracteristicas: 'Vegano',
    clasificacion: 'Entradas',
}, {
    nombre: 'Patacones',
    descripcion: 'Plátano verde frito sazonado con sal',
    precio: '₡1.500',
    caracteristicas: 'Vegano',
    clasificacion: 'Entradas',
}, {
    nombre: 'Pan de Ajo',
    descripcion: 'Rebanadas de pan tostado con mantequilla de ajo',
    precio: '₡1,500',
    caracteristicas: 'Gluten',
    caracteristicas: 'Lacteos',
    clasificacion: 'Entradas',
}, {
    nombre: 'César',
    descripcion: 'Lechuga, pan tostado, aderezado con una mezcla de ajo, aceite de oliva, anchoas, huevo duro y queso parmesano.',
    precio: '₡3,000',
    caracteristicas: 'Vegetariana',
    clasificacion: 'Ensaladas',
}, {
    nombre: 'Caprese',
    descripcion: 'Rodajas de tomate, mozzarella fresca y hojas de albahaca fresca, regado con aceite de oliva.',
    precio: '₡3,000',
    caracteristicas: 'Lacteos',
    clasificacion: 'Ensaladas',
}, {
    nombre: 'Griega',
    descripcion: 'Tomate, pepino, pimiento y cebolla roja, con sal, pimienta negra y orégano, aliñada con aceite de oliva',
    precio: '₡3,000',
    caracteristicas: 'Vegano',
    clasificacion: 'Ensaladas',
}, {
    nombre: 'Casado',
    descripcion: 'Arroz, frijoles, ensalada, carne a elegir, plátanos maduros y picadillo',
    precio: '₡3,500',
    caracteristicas: 'Vegetariano',
    clasificacion: 'Plato fuerte',
}, {
    nombre: 'Pasta Alfredo',
    descripcion: 'Pasta fresca de fettuccine con una salsa cremosa, hecha de mantequilla y queso parmesano.',
    precio: '₡5,000',
    caracteristicas: 'Lácteos',
    clasificacion: 'Plato fuerte',
}, {
    nombre: 'Filet de pescado',
    descripcion: 'Filet de pescado con salsa a elegir, acompañado de arroz y ensalada',
    precio: '₡4,000',
    caracteristicas: 'Pescado',
    clasificacion: 'Plato fuerte',
}, {
    nombre: 'Tiramisú',
    descripcion: 'Postre italiano que se prepara con láminas de masa de bizcocho empapadas en café con licor en capas alternadas con crema y una capa de cacao en polvo encima',
    precio: '₡4,000',
    caracteristicas: 'Huevo',
    clasificacion: 'Postre',
}, {
    nombre: 'Queque de chocolate',
    descripcion: 'Queque de chocolate esponjoso y húmedo con cobertura de ganache de chocolate',
    precio: '₡2,500',
    caracteristicas: 'Gluten',
    clasificacion: 'Postre',
}, {
    nombre: 'Cheesecake',
    descripcion: 'Pastel de queso con una base de galleta, llena de una mezcla de queso crema y cubierto con salsa de frutas de temporada',
    precio: '₡3,000',
    caracteristicas: 'Lácteos',
    clasificacion: 'Postre',
}, ]
const obtenerPlatos = () => {
    return listaPlatos;
};

const inputNombre = document.querySelector('#txtNombre');
const inputDescripcion = document.querySelector('#txtDescripcion');
const inputPrecio = document.querySelector('#txtPrecio');
const inputCaracEspeciales = document.querySelector('#txtCaracEspeciales');
const inputClasificacion = document.querySelector('#txtClasificacion');
const btnRegistrar = document.querySelector('#btnRegistrar');

const validar = () => {

    let error = false;
    if (inputNombre.value == "") {
        error = true;
        inputNombre.classList.add('error');
    } else inputNombre.classList.remove('error');


    if (inputDescripcion.value == "") {
        error = true;
        inputDescripcion.classList.add('error');
    } else inputDescripcion.classList.remove('error');

    if (inputPrecio.value == "") {
        error = true;
        inputPrecio.classList.add('error');
    } else inputPrecio.classList.remove('error');

    if (inputCaracEspeciales.value == "") {
        error = true;
        inputCaracEspeciales.classList.add('error');
    } else inputCaracEspeciales.classList.remove('error');

    if (inputClasificacion.value == "") {
        error = true;
        inputClasificacion.classList.add('error');
    } else inputClasificacion.classList.remove('error');

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
        obtenerPlatos();
        Swal.fire({
            'icon': 'success',
            'title': 'Registro exitoso',
            'text': 'El plato ha sido agregado',
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

    let descripcion = inputDescripcion.value;

    let precio = inputPrecio.value;

    let caracEspeciales = inputCaracEspeciales.value;

    let clasificacion = inputClasificacion.value;

    console.log(nombre, descripcion, precio, caracEspeciales, clasificacion);
    // Value saca el valor de la caja de texto



};
//Evento, cuando se le da click al botón se ejecuta la funcion de obtener datos 
btnRegistrar.addEventListener('click', validar);