let nivel = 1;
let secuenciaNumeros = [];

function iniciarJuegoDificil() {
  nivel = 1;
  secuenciaNumeros = [];
  document.getElementById("mensaje").innerHTML = "Ingresa un número de 3 a 5 cifras:";
}

function verificarNumeroDificil() {
  let numeroIngresado = document.getElementById("entradaNumero").value;

  if (validarNumero(numeroIngresado) && !secuenciaNumeros.includes(parseInt(numeroIngresado))) {
    secuenciaNumeros.push(parseInt(numeroIngresado));
    document.getElementById("mensaje").innerHTML = "✅ Número guardado. Avanza al siguiente nivel.";
    document.getElementById("entradaNumero").value = "";

    if (nivel === 1) {
      nivel++;
    } else if (nivel === 2) {
      alert("Ahora ingresa los números del nivel 1 y nivel 2 separados por una coma.");
      solicitarNumerosParaAvanzar();
    }
  }
}

function solicitarNumerosParaAvanzar() {
  document.getElementById("mensaje").innerHTML =
    "Ingresa los números del nivel 1 y nivel 2 separados por una coma:";
  document.getElementById("entradaNumero").placeholder = "Ejemplo: 1234, 56789";

  document.getElementById("entradaNumero").onkeyup = function () {
    const numerosIngresados = document
      .getElementById("entradaNumero")
      .value.split(",")
      .map((num) => parseInt(num.trim()));

    if (
      numerosIngresados.length === 2 &&
      numerosIngresados.every((num) => secuenciaNumeros.includes(num))
    ) {
      document.getElementById("mensaje").innerHTML =
        "✅ ¡Números correctos! Has completado el juego.";
    } else {
      document.getElementById("mensaje").innerHTML = "❌ Números incorrectos. Fin del juego.";
      setTimeout(() => location.reload(), 3000);
    }
  };
}

function validarNumero(numero) {
  return numero.length >= 3 && numero.length <= 5;
}

window.onload = iniciarJuegoDificil;
