'use strict';
const inputTiempoDeReserva = document.querySelector('#txtTiempo');

const btnRegistar = document.querySelector('#btnRegistar');

const validar=() =>{
    
    let error=false;
    if(inputTiempoDeReserva.value==""){
        error=true;
        inputTiempoDeReserva.classList.add('error');
    }else inputTiempoDeReserva.classList.remove('error');
    
  
    if (error == false) {//ALERTAS
        Swal.fire({
            icon: 'success',
            title: 'Se agregó correctamente el tiempo '
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
        let Tiempo=inputTiempoDeReserva.value;
     
    
        console.log(Tiempo);
        
        // value sacando el valor de la caja de texto
    
    
    
    };
    //evento , cuando al boton se le da click se ejecuta la funcion de obtener datos 
    btnRegistar.addEventListener('click',validar);// aqui 