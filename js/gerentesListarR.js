'use strict';
const inputNombreG = document.querySelector('#txtNombreCompleto');
const inputCorreoG = document.querySelector('#txtCorreoElectrónico');
const inputRestauranteG = document.querySelector('#txtRestauranteAsignado');
const btnRegistar = document.querySelector('#btnRegistar');
let inputsRequeridos = document.querySelectorAll('input:required');
const validar=() =>{
    
    let error=false;
    if(inputNombreG.value==""){
        error=true;
    inputNombreG.classList.add('error');
    }else inputNombreG.classList.remove('error');
    
    
    if( inputCorreoG.value==""){
        error=true;
        inputCorreoG.classList.add('error');
    }else  inputCorreoG.classList.remove('error');
    
    
    if( inputRestauranteG.value==""){
        error=true;
        inputRestauranteG.classList.add('error');
    }else  inputRestauranteG.classList.remove('error');
    
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
            title: 'Se agregó correctamente el encargado '
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
        let nombre=inputNombreG.value;
     
        let correo=inputCorreoG.value;
       
        let asignado=inputRestauranteG.value;

       localStorage.getItem('nombre,correo,asignado',obtenerDatos);
        console.log(nombre,correo,asignado);
        
        // value sacando el valor de la caja de texto
    
    
    
    };
    //evento , cuando al boton se le da click se ejecuta la funcion de obtener datos 
    btnRegistar.addEventListener('click',validar);// aqui 

    
