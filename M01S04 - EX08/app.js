class Serie {
  constructor(nome, anoDeLancamento, qttTemporada) {
    this.nome = nome;
    this.anoDeLancamento = anoDeLancamento;
    this.qttTemporada = qttTemporada;
  }
}

const strangerThings = new Serie('Stranger Things', 2016, 5);

console.log(strangerThings.nome, strangerThings.anoDeLancamento);
const series = [];

for (let i = 0; i < 4; i++) {
  let nome = window.prompt('Digite o nome da série');
  let anoDeLancamento = window.prompt('Digite o ano de lançamento da série');
  let qttTemporada = window.prompt('Digite a quantidade de temporadas');
  let serie = new Serie(nome, anoDeLancamento, qttTemporada);
  series.push(serie);
}

console.log(series);
let oldestSerie = new Serie('dummy', 99999999, 2);
series.forEach((serie) => {
  if (serie.anoDeLancamento < oldestSerie.anoDeLancamento) {
    oldestSerie = serie;
  }
});
console.log(oldestSerie);
document.write(
  `A série mais antiga é ${oldestSerie.nome} lançada em ${oldestSerie.anoDeLancamento}`
);
