// Classe inicial com violação do DIP

class Guerreiro1 {
  lutar(): string {
    return 'O guerreiro luta com sua espada!'
  }
}

class Mago1 {
  conjurarMagia(): string {
    return 'O mago lança uma magia poderosa!'
  }
}

class Batalha {
  private guerreiro: Guerreiro1
  private mago: Mago1

  constructor() {
    this.guerreiro = new Guerreiro1()
    this.mago = new Mago1()
  }

  iniciarBatalha(): string {
    return `${this.guerreiro.lutar()} e ${this.mago.conjurarMagia()}`
  }
}

// Uso da classe
const batalha = new Batalha()
console.log(batalha.iniciarBatalha())
// Saída: O guerreiro luta com sua espada! e O mago lança uma magia poderosa!
