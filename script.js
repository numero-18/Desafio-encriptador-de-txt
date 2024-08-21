function encriptar() {
    let texto = document.getElementById("texto").value;  // Cambiar 'Value' a 'value'
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let grafico = document.getElementById("grafico");

     // Validar si el texto contiene mayúsculas, números o caracteres especiales
     if (/[A-Z0-9\W]/.test(texto)) {
        Swal.fire({
            title: "Ooop!",
            text: "Solo se aceptan letras minúsculas y sin números ni caracteres especiales.",
            icon: "error"
        })
        return; // Detiene la ejecución de la función si se encuentra algún carácter no permitido
    }

    // Encriptar el texto
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;  // Cambiar 'Value' a 'value'
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        grafico.src = "./img/encriptado.gif";
    } else {
        grafico.src = "./img/grafico.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";

        // Mostrar la alerta SweetAlert2 para que tenga mas estetica 
        Swal.fire({
            title: "Algo a salido mal.!",
            text: "Prueba ingresar un texto.",
            icon: "warning"
        })
    }
}


function desencriptar() {
    let texto = document.getElementById("texto").value;  // Declaración correcta
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let grafico = document.getElementById("grafico");  // Corrección en el ID

     // Validar si el texto contiene mayúsculas, números o caracteres especiales
     if (/[A-Z0-9\W]/.test(texto)) {
        Swal.fire({
            title: "Ooop!",
            text: "Solo se aceptan letras minúsculas y sin números ni caracteres especiales.",
            icon: "error"
        })
        return; // Detiene la ejecución de la función si se encuentra algún carácter no permitido
    }

    // Desencriptar el texto
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        grafico.src = "./img/desencrip.jpg";  // Asegúrate de que esta ruta sea correcta
    } else {
        grafico.src = "./img/grafico.png";  // Asegúrate de que esta ruta sea correcta
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
        
        // Mostrar la alerta SweetAlert2 para que tenga mas estetica 
        Swal.fire({
            title: "Algo a salido mal.!",
            text: "Prueba ingresar un texto.",
            icon: "warning"
        })
    }
}

function copiar() {
    let texto = document.getElementById("texto").value;
    let parrafo = document.getElementById("parrafo");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let contenido = document.querySelector("#texto");
    contenido.select();
    document.execCommand("copy");
    
    if(texto) {
        grafico.src = "./img/copia.jpeg";
        tituloMensaje.textContent = "";
        parrafo.textContent = "Texto copiado con exito"
    } else {
        grafico.src = "./img/grafico.png";
        
        // Mostrar la alerta SweetAlert2 para que tenga mas estetica 
        Swal.fire({
            title: "Algo a salido mal.!",
            text: "Prueba ingresar un texto.",
            icon: "warning"
        })
    
    }
}
