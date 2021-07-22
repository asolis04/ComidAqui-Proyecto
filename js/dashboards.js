'use strict';
/*Super Admin */
const elementoNombreUsuario = document.querySelector('#nombrePerfil')
const correoPerfil = document.querySelector('#correoPerfiles');
const fechaNacimientoPerfil = document.querySelector('#fechaNacimientoPerfil');
const cedulaPerfil = document.querySelector('#cedualPerfil');

/*Encargado */
const NombreUsuarioEncargado = document.querySelector('#nombrePerfilEncargado')
const correoPerfilEncfargado = document.querySelector('#correoPerfilEncargado');
const fechaNacimientoPerfilEncargado = document.querySelector('#fechaNacimientoPerfilEncargado');
const cedulaPerfilEncargado = document.querySelector('#cedualPerfilEncargado');


/*Dueño */
const nombrePerfilDueno = document.querySelector('#nombrePerfilDueno')
const correoPerfilDueno = document.querySelector('#correoPerfilDueno');
const fechaNacimientoPerfilDueno = document.querySelector('#fechaNacimientoPerfilDueno');
const cedualPerfilDueno = document.querySelector('#cedualPerfilDueno');

let usuarioSesion = JSON.parse(localStorage.getItem('usuarioConectado'));


/*Super Admin*/
elementoNombreUsuario.innerText = usuarioSesion.nombre;
correoPerfil.innerText = usuarioSesion.correo;
fechaNacimientoPerfil.innerText = usuarioSesion.fechaNacimiento;
cedulaPerfil.innerText = usuarioSesion.cedula;
/*Encargado */
NombreUsuarioEncargado.innerText = usuarioSesion.nombre;
correoPerfilEncfargado.innerText = usuarioSesion.correo;
fechaNacimientoPerfilEncargado.innerText = usuarioSesion.fechaNacimiento;
cedulaPerfilEncargado.innerText = usuarioSesion.cedula;
/*Dueño */
nombrePerfilDueno.innerText = usuarioSesion.nombre;
correoPerfilDueno.innerText = usuarioSesion.correo;
fechaNacimientoPerfilDueno.innerText = usuarioSesion.fechaNacimiento;
cedualPerfilDueno.innerText = usuarioSesion.cedula;

console.log(usuarioSesion);