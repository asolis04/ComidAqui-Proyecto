const tabla=document.querySelector( '#tbl-usuarios tbody');
const inputFiltro=document.querySelector('#txt-filtro');
let listaGobalDeUsuarios=obtenerUsuarios();


const mostarUsuarios= () =>{

    tabla.innerHTML = '';


listaGobalDeUsuarios.forEach(objUsuario => {
    let filtro=inputFiltro.value.toLowerCase();
    if(objUsuario.nombreComercial.toLocaleLowerCase().includes(filtro)){//filtrar 
      let fila = tabla.insertRow();
      fila.insertCell().innerHTML = objUsuario.nombreComercial;
      fila.insertCell().innerHTML = objUsuario.cedulaJuridica;
      fila.insertCell().innerHTML = objUsuario.nombreJuridico;
      fila.insertCell().innerHTML = objUsuario.correcoElectronico;
      fila.insertCell().innerHTML = objUsuario.aforo;
      fila.insertCell().innerHTML = objUsuario.telefono;
      fila.insertCell().innerHTML = objUsuario.direccion;
      fila.insertCell().innerHTML = objUsuario.provincia;
      fila.insertCell().innerHTML = objUsuario.distrito;
      fila.insertCell().innerHTML = objUsuario.canton;
      fila.insertCell().innerHTML = objUsuario.horario;
    
           

      
    

    }
    //crear una fila
  
    
});

};
mostarUsuarios()//invocarla
inputFiltro.addEventListener('keyup',mostarUsuarios);