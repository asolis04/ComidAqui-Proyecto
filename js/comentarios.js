'use strict';//filtar

const tabla=document.querySelector( '#tbl-usuarios tbody');
const inputFiltro=document.querySelector('#txt-filtro');
let listaGobalDeUsuarios=obtenerUsuarios();


const mostarUsuarios= () =>{

    tabla.innerHTML = '';
//limpiar tabla

listaGobalDeUsuarios.forEach(objUsuario => {
    let filtro=inputFiltro.value.toLowerCase();
    if(objUsuario.nombreDelRestaurante.toLocaleLowerCase().includes(filtro)){//filtrar 
      let fila = tabla.insertRow();
      fila.insertCell().innerHTML = objUsuario.nombreDelRestaurante;
      fila.insertCell().innerHTML = objUsuario.comentarios;
    

    }
    //crear una fila
  
    
});

};
mostarUsuarios()//invocarla
inputFiltro.addEventListener('keyup',mostarUsuarios);