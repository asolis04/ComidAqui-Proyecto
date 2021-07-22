'use strict';
const Nombre = document.querySelector('#txtNombre');
const Correo = document.querySelector('#txtCorreo');
const FechaNacimiento = document.querySelector('#txtFechaNac');
const TipoCedula = document.querySelector('#txtTipoCedula');
const Cedula = document.querySelector('#txtCedula');
const Contrasenha = document.querySelector('#txtContrasenha');


let usuarioSesion = JSON.parse(localStorage.getItem('usuarioConectado'));

Nombre.innerText = usuarioSesion.nombre;
Correo.innerText = usuarioSesion.correo;
FechaNacimiento.innerText = usuarioSesion.fechaNacimiento;
/*inputTipoCedula.innerText = usuarioSesion.cedula;*/
Contrasenha.innerText = usuarioSesion.contrasenha;

console.log(usuarioSesion);