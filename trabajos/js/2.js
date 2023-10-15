const catetoOpuesto = document.getElementById('cateto_opuesto');
const catetoAdyacente = document.getElementById('cateto_adyacente');
const resultado = document.getElementById('resultado');

catetoOpuesto.addEventListener('input', () => {
  calcularHipotenusa();
});

catetoAdyacente.addEventListener('input', () => {
  calcularHipotenusa();
});

function calcularHipotenusa() {
  const co = parseFloat(catetoOpuesto.value);
  const ca = parseFloat(catetoAdyacente.value);

  if (isNaN(co) || isNaN(ca)) {
    resultado.innerHTML = 'Introduzca datos (numeros) en los 2 campos';
    return;
  }

  const h = Math.sqrt(co * co + ca * ca);
  resultado.innerHTML = ` Resultado ${h}.`;
}