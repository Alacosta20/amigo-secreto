// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
//Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
//Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

let amigos = [];
let input = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

// Agregar amigo
function agregarAmigo() {
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}

// Mostrar lista en pantalla
function mostrarLista() {
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Sortear amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indice];

    resultado.innerHTML = `<li>${elegido} es tu amigo secreto 🎉</li>`;
}
