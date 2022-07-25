class Pessoa {
  nome;
  idade;
  cpf;

  podeDirigir() {
    if (this.idade < 18) {
      return false;
    }
    return true;
  }
}

const joao = new Pessoa();
joao.nome = 'joão';
joao.idade = '55';
joao.cpf = '111.111.222.333-40';
console.log(joao);
console.log(joao.podeDirigir());
