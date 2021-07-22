let listaRestaurantes = [{
        nombreComercial: 'Chilis',
        cedulaJuridica: '4-000- 001021',
        nombreJuridico: '',
        correcoElectronico: 'chilis@gmail.com',
        aforo: 30,
        telefono: '4144-8635',
        direccion: 'Multiplaza Escazú',
        provincia: 'San Jose',
        distrito: 'Escazú',
        canton: 'Escazú',
        horario: {
            Lunes: '9am - 9pm',
            Martes: '9am - 9pm',
            Miercoles: '9am - 9pm',
            Jueves: '9am - 9pm',
            Viernes: '9am - 9pm',
            Sabado: '9am - 9pm',
            Domingo: '9am - 9pm'
        }
    },
    {
        nombreComercial: 'La Parrillita de Pepe',
        cedulaJuridica: '3-010-221021',
        nombreJuridico: '',
        correcoElectronico: 'parrillitapepe@gmail.com',
        aforo: 30,
        telefono: '4033-8535',
        direccion: 'Heredia, frente a Best Brands, detras de la Bomba Delta',
        provincia: 'Heredia',
        distrito: 'Heredia',
        canton: 'Heredia',
        horario: {
            Lunes: '9am - 9pm',
            Martes: '9am - 9pm',
            Miercoles: '9am - 9pm',
            Jueves: '9am - 9pm',
            Viernes: '9am - 9pm',
            Sabado: '9am - 9pm',
            Domingo: '9am - 9pm'
        }
    },

    {
        nombreComercial: 'Restaurante Nuestra Tierra',
        cedulaJuridica: '4-923-992021',
        nombreJuridico: '',
        correcoElectronico: 'nuestratierra@gmail.com',
        aforo: 30,
        telefono: '2258 6500',
        direccion: 'Avenida Segunda, frente a la Plaza de la Democracia, Av. 2, San José',
        provincia: 'San Jose',
        distrito: 'San Jose',
        canton: 'San Jose',
        horario: {
            Lunes: '9am - 9pm',
            Martes: '9am - 9pm',
            Miercoles: '9am - 9pm',
            Jueves: '9am - 9pm',
            Viernes: '9am - 9pm',
            Sabado: '9am - 9pm',
            Domingo: '9am - 9pm'
        }
    },
    {
        nombreComercial: 'Tin Jo',
        cedulaJuridica: '3-995-997826',
        nombreJuridico: '',
        correcoElectronico: 'tinjo@gmail.com',
        aforo: 30,
        telefono: '2221 7605',
        direccion: 'Calle 11, between Avs. 6 and 8, Calle 11, San José Province, San Jose, Costa Rica',
        provincia: 'San Jose',
        distrito: 'San Jose',
        canton: 'San Jose',
        horario: {
            Lunes: '9am - 9pm',
            Martes: '9am - 9pm',
            Miercoles: '9am - 9pm',
            Jueves: '9am - 9pm',
            Viernes: '9am - 9pm',
            Sabado: '9am - 9pm',
            Domingo: '9am - 9pm'
        }
    },
    {
        nombreComercial: 'Tsunami Sushi',
        cedulaJuridica: '3-935-007369',
        nombreJuridico: '',
        correcoElectronico: 'tsunamisushi@gmail.com',
        aforo: 30,
        telefono: '8916 7755',
        direccion: 'Mall Paseo de las Flores Heredia San Francisco, 40103',
        provincia: 'Heredia',
        distrito: 'Heredia',
        canton: 'Heredia',
        horario: {
            Lunes: '9am - 9pm',
            Martes: '9am - 9pm',
            Miercoles: '9am - 9pm',
            Jueves: '9am - 9pm',
            Viernes: '9am - 9pm',
            Sabado: '9am - 9pm',
            Domingo: '9am - 9pm'
        }
    },

]

const obtenerRestaurantes = () => {
    return listaRestaurantes;
};

const tabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.querySelector('#inputSearch');
let coleccionRestaurantes = obtenerRestaurantes();

const mostrarRestaurantes = () => {

    tabla.innerHTML = '';

    //Iterar sobre una coleccion de datos
    coleccionRestaurantes.forEach(objRestaurante => {
        let filtro = inputFiltro.value.toLowerCase();
        if (objRestaurante.nombreComercial.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = objRestaurante.nombreComercial;
        }
    });
};

mostrarRestaurantes();

inputFiltro.addEventListener('keyup', mostrarRestaurantes);