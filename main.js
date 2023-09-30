function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Error: No se puede dividir por cero.";
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {

    const mensajeBienvenida = document.createElement('p');
    mensajeBienvenida.textContent = '¡Bienvenido a la calculadora!';
    document.body.appendChild(mensajeBienvenida);
  
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  
    const resultados = [];
    const suma = sumar(numero1, numero2);
    const resta = restar(numero1, numero2);
    const multiplicacion = multiplicar(numero1, numero2);
    const division = dividir(numero1, numero2);
  
    resultados.push(suma, resta, multiplicacion, division);
  
    localStorage.setItem('resultados', JSON.stringify(resultados));
  
    const mostrarResultadosBtn = document.createElement('button');
    mostrarResultadosBtn.textContent = 'Mostrar Resultados';
    document.body.appendChild(mostrarResultadosBtn);
  
    mostrarResultadosBtn.addEventListener('click', function () {
      const resultadosAlmacenados = JSON.parse(localStorage.getItem('resultados'));
  
      const resultadoDiv = document.createElement('div');
      resultadoDiv.innerHTML = `
        <p>Suma: ${resultadosAlmacenados[0]}</p>
        <p>Resta: ${resultadosAlmacenados[1]}</p>
        <p>Multiplicación: ${resultadosAlmacenados[2]}</p>
        <p>División: ${resultadosAlmacenados[3]}</p>
      `;
      document.body.appendChild(resultadoDiv);
    });
  });
  