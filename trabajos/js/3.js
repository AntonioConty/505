const radio = document.getElementById('radio');
const resultado = document.getElementById('resultado');

radio.addEventListener('input', () => {
  const perimetro = 2 * Math.PI * radio.value;
  resultado.innerHTML = `Circunferencia = ${perimetro.toFixed(2)}`;
});