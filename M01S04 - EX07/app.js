let arrayAlunos = [
  {
    nome: 'Carlos',
    media: 10,
  },
  {
    nome: 'Julia',
    media: 8,
  },
  {
    nome: 'Rayane',
    media: 6,
  },
  {
    nome: 'Arthur',
    media: 5,
  },
];

function avaliarAlunos() {
  let aprovados = 0;
  const resposta = document.querySelector('.resposta');
  arrayAlunos.forEach((aluno) => {
    if (aluno.media > 7) {
      return aprovados++;
    }
    return (resposta.innerHTML += `<li>${aluno.nome} ficou de recuperação</li>`);
  });
  if (aprovados === arrayAlunos.length) {
    resposta.innerHTML = 'Parabéns todos os alunos foram aprovados';
    console.log('Parabéns todos os alunos foram aprovados');
  }

  console.log(aprovados);
}

avaliarAlunos();
