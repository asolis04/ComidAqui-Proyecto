'use strict';

// estado
// 1 --> activo
// 2 --> inactivo
// 3 --> pendiente de aceptación
// 4 --> vetado
// 5 --> pendiente de cambio de contraseña

let listaUsuarios = [{
    nombreDelGerente: '	Alejandra Delgado Barrón  ',
    correo:'ale-delgado@gmail.com',
    restaurante: 'Chilis'
}, {
    nombreDelGerente: 'Juan Miguel Acosta ',
    correo: 'a_miguel@gmail.com',
    restaurante: 'La Parrillita de Pepe'
}, {
    nombreDelGerente: 'Karla Paulette Gómez Vargas',
    correo:  'kpaulette-g-v@gmail.com',
    restaurante: 'Restaurante Nuestra Tierra'

}, {
    nombreDelGerente: 'Vivian Martin Ramírez',
    correo: 'vMartin@gmail.com',
    restaurante: 'Tin Jo'



}, {
    nombreDelGerente: 'Danna Verónica Herrera Arias',
    correo: 'dannaVero-h@gmail.com',
    restaurante: 'Tsunami Sushi'
}];

const obtenerUsuarios = () => {
    return listaUsuarios;
};
