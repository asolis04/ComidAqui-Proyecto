'use strict';
const inputNombreComercial = document.querySelector('#txtNombreComercial');
const inputCedulaJuridica = document.querySelector('#txtCedulaJuridica');
const inputNombreJurídico = document.querySelector('#txtNombreJurídico');
const inputCorreoElectrónico = document.querySelector('#txtCorreoElectrónico');
const inputAforo = document.querySelector('#txtAforo');
const inputTeléfono = document.querySelector('#txtTeléfono');
const inputDireccion = document.querySelector('#txtDireccion');
const inputProvincia = document.querySelector('#txtProvincia');
const inputDistrito = document.querySelector('#txtDistrito');
const inputCantón = document.querySelector('#txtCantón');
const inputAbre = document.querySelector('#txtAbre');
const inputCierra = document.querySelector('#txtCierra');
const btnRegistar = document.querySelector('#btnRegistar');
const btnBorrar=document.querySelector('btnBorrar');

let checkbox1 = document.querySelector('#Domingo').checked;
let checkbox2 = document.querySelector('#Lunes').checked;
let checkbox3 = document.querySelector('#Martes').checked;
let checkbox4 = document.querySelector('#Miércoles').checked;
let checkbox5 = document.querySelector('#Jueves').checked;
let checkbox6 = document.querySelector('#Viernes').checked;
let checkbox7 = document.querySelector('#Sábado').checked;

let inputsRequeridos = document.querySelectorAll('input:required');


const validar=() =>{
    let valor=true;
    let error=false;
    if(inputNombreComercial.value==""){
        error=true;
        inputNombreComercial.classList.add('error');
    }else inputNombreComercial.classList.remove('error');
    
    
    if( inputCedulaJuridica.value==""){
        error=true;
        inputCedulaJuridica.classList.add('error');
    }else  inputCedulaJuridica.classList.remove('error');
    
    
    if( inputNombreJurídico.value==""){
        error=true;
        inputNombreJurídico.classList.add('error');
    }else  inputNombreJurídico.classList.remove('error');
    
    if( inputCorreoElectrónico.value==""){
        error=true;
        inputCorreoElectrónico.classList.add('error');
    }else  inputCorreoElectrónico.classList.remove('error');
    
    if( inputAforo.value==""){
        error=true;
        inputAforo.classList.add('error');
    }else  inputAforo.classList.remove('error');
    
    if( inputTeléfono.value==""){
        error=true;
        inputTeléfono.classList.add('error');
    }else  inputTeléfono.classList.remove('error');
    
    if( inputDireccion.value==""){
        error=true;
        inputDireccion.classList.add('error');
    }else  inputDireccion.classList.remove('error');
    
    if( inputProvincia.value==""){
        error=true;
        inputProvincia.classList.add('error');
    }else  inputProvincia.classList.remove('error');
    
    if( inputDistrito.value==""){
        error=true;
        inputDistrito.classList.add('error');
    }else  inputDistrito.classList.remove('error');
    
    if( inputCantón.value==""){
        error=true;
        inputCantón.classList.add('error');
    }else  inputCantón.classList.remove('error');

    if (document.querySelector('#Domingo').checked == valor) {
        console.log("Domingo");

    } if (checkbox2 = document.querySelector('#Lunes').checked == valor) {

        console.log(" Lunes");
    } else{
        error=true;
        inputCantón.classList.add('error');
    }
    if (document.querySelector('#Martes').checked == valor) {
        console.log("Martes");

    }
    if (document.querySelector('#Miércoles').checked == valor) {
        console.log(" Miércoles");

    } if (document.querySelector('#Jueves').checked == valor) {
        console.log("Jueves");

    } if (document.querySelector('#Viernes').checked == valor) {
        console.log("Viernes");

    } if (document.querySelector('#Sábado').checked == valor) {
        console.log("Sábado");

    }
        

    if( inputAbre.value==""){
        error=true;
        inputAbre.classList.add('error');
    }else  inputAbre.classList.remove('error');
    if( inputCierra.value==""){
        error=true;
        inputCierra.classList.add('error');
    }else  inputCierra.classList.remove('error');
    
    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (error == false) {
        Swal.fire({
            icon: 'success',
            title: 'Se agregó correctamente el restaurante '
        })
    }
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
        obtenerDatos();
      
    }
    
    
    
    };
    
    
    
    // forma mas aactual de crear una funciom
    //funcion 
    const obtenerDatos=()=>{
        //enlazar el boton 
        // variable nombre es local en obtener datos 
        let NombreComercial=inputNombreComercial.value;
        let CedulaJuridica=inputCedulaJuridica.value;
        let NombreJurídico=inputNombreJurídico.value;
        let CorreoElectrónico=inputCorreoElectrónico.value;
        let Aforo=inputAforo.value;
        let Teléfono=inputTeléfono.value;
        let Direccion=inputDireccion.value;
        let Provincia=inputProvincia.value;
        let Distrito=inputDistrito.value;
        let Cantón=inputCantón.value;
   
        let Abre=inputAbre.value;
        let Cierra=inputCierra.value;
     
        console.log(NombreComercial,CedulaJuridica,NombreJurídico,CorreoElectrónico,Aforo,Teléfono,Direccion,Provincia,Distrito,Cantón,Abre,Cierra);
        
        // value sacando el valor de la caja de texto
    
    
    
    };
    
 
  
    //evento , cuando al boton se le da click se ejecuta la funcion de obtener datos 
    btnRegistar.addEventListener('click',validar);// aqui 
    

    
