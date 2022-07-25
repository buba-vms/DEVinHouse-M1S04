// Construa um código javascript que irá remover de um array um item que irá ser passado no parâmetro desse método.
// O fluxo consiste em capturar em um input html um item do array e ao apertar em um botão fazer com que esse item seja excluído (utilize o addEventListener de click).
// Pode conferir no console.log() como está o array após a exclusão.
const apagar = document.querySelector('#apagar');
const texto = document.querySelector('#texto');

let arrayTeste = [5, '2', 9, 'pato', 5, 7, '254'];
console.log(arrayTeste);
arrayTeste = arrayTeste.map((item) => {
  if (!isNaN(item)) {
    return `${item}`;
  }
  return item;
});
console.log(arrayTeste);

apagar.addEventListener('click', function () {
  inputValue = texto.value;
  index = arrayTeste.indexOf(texto.value);
  if (index < 0) {
    window.alert('Este valor não está na array');
    return;
  }
  arrayTeste = arrayTeste.filter((item) => {
    return item != inputValue;
  });

  console.log(arrayTeste);
});
