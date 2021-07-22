"use strict";

const btnGuardar = document.querySelector("#btnGuardar");

const selecRest = document.querySelector("#slt-restaurante");
const buscarPlatos = document.querySelector("#txt-usuario");

const libreGluten = document.querySelector("#libreGluten");
const bajoCalorias = document.querySelector("#bajoCalorias");
const vegano = document.querySelector("#vegano");
const vegetariano = document.querySelector("#vegetariano");
const picante = document.querySelector("#picante");

const clasificacion = document.querySelector("#clasificacion");



const validar = () => {
    let error = false

    if (selecRest.value == "") {
        error = true
        selecRest.classList.add("error")
    } else {
        selecRest.classList.remove("error")
    }

    if (buscarPlatos.value == "") {
        error = true
        buscarPlatos.classList.add("error")
    } else {
        buscarPlatos.classList.remove("error")
    }

    if (libreGluten.value == "") {
        error = true
        libreGluten.classList.add("error")
    } else {
        libreGluten.classList.remove("error")
    }

    if (bajoCalorias.value == "") {
        error = true
        bajoCalorias.classList.add("error")
    } else {
        bajoCalorias.classList.remove("error")
    }

    if (vegano.value == "") {
        error = true
        vegano.classList.add("error")
    } else {
        vegano.classList.remove("error")
    }

    if (vegetariano.value == "") {
        error = true
        vegetariano.classList.add("error")
    } else {
        vegetariano.classList.remove("error")
    }

    if (picante.value == "") {
        error = true
        picante.classList.add("error")
    } else {
        picante.classList.remove("error")
    }

    if (clasificacion.value == "") {
        error = true
        clasificacion.classList.add("error")
    } else {
        clasificacion.classList.remove("error")
    }

    console.log(selecRest.value);
    console.log(buscarPlatos.value);

    console.log(libreGluten.value);
    console.log(bajoCalorias.value);
    console.log(vegano.value);
    console.log(vegetariano.value);
    console.log(picante.value);

    console.log(clasificacion.value);


    if (error == true) {
        Swal.fire({
            icon: "warning",
            title: "No se guardó la información",
            text: "Por favor revise los campos resaltados",
            "confirmButtonText": "Entendido"
        })
    } else {
        Swal.fire({
            icon: "success",
            title: "La información de los platos ha sido guardada correctamente",

        }).then(() => {
            window.location.href = "clasificacion-platos.html";
        });


    }

}


btnGuardar.addEventListener("click", validar);