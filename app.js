let listaDeAmigos = [];
let nombresSorteados = [];

let input = document.getElementById('amigo');
let botonAgregar = document.getElementById('botonAgregar');
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
  let nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor, escribe un nombre.');
    return;
  }

  if (listaDeAmigos.includes(nombre)) {
    alert('Este nombre ya fue agregado.');
    return;
  }

  listaDeAmigos.push(nombre);
  actualizarLista();

  input.value = '';
  input.focus();
  cambiarColorBoton();
}

function actualizarLista() {
  lista.innerHTML = '';
  for (let nombre of listaDeAmigos) {
    lista.innerHTML += `<li>${nombre}</li>`;
  }
}

input.addEventListener('input', () => {
  let nombre = input.value.trim();
  if (nombre !== '') {
    botonAgregar.style.backgroundColor = 'green';
    botonAgregar.style.color = 'white';
  } else {
    cambiarColorBoton();
  }
});

function cambiarColorBoton() {
  botonAgregar.style.backgroundColor = '';
  botonAgregar.style.color = '';
}

function sortearAmigo() {
  resultado.innerHTML = '';

  let noSorteados = [];

  for (let nombre of listaDeAmigos) {
    if (!nombresSorteados.includes(nombre)) {
      noSorteados.push(nombre);
    }
  }

  if (noSorteados.length === 0) {
    resultado.innerHTML = '<li>Todos los nombres han sido sorteados.</li>';
    return;
  }

  let nombreAleatorio = Math.floor(Math.random() * noSorteados.length);
  let nombreSorteado = noSorteados[nombreAleatorio];

  nombresSorteados.push(nombreSorteado);

  resultado.innerHTML = `<li>Tu amigo secreto es: ${nombreSorteado}</li>`;
}