// Aplicação do DIP com abstração

// Interface que abstrai o comportamento dos personagens
interface Personagem2 {
  executarAcao(): string
}

// Implementação de cada personagem com base na interface
class Guerreiro2 implements Personagem2 {
  executarAcao(): string {
    return 'O guerreiro luta com sua espada!'
  }
}

class Mago2 implements Personagem2 {
  executarAcao(): string {
    return 'O mago lança uma magia poderosa!'
  }
}

// Nova classe Batalha que depende da abstração Personagem
class Batalha1 {
  private personagens: Personagem2[]

  constructor(personagens: Personagem2[]) {
    this.personagens = personagens
  }

  iniciarBatalha(): string {
    return this.personagens
      .map((personagem) => personagem.executarAcao())
      .join(' e ')
  }
}

// Uso da classe com injeção de dependência
const personagens: Personagem2[] = [new Guerreiro2(), new Mago2()]
const batalha1 = new Batalha1(personagens)
console.log(batalha.iniciarBatalha())
// Saída: O guerreiro luta com sua espada! e O mago lança uma magia poderosa!
