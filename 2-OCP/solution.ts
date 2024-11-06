// Aplicação do OCP

// Interface para definir o comportamento de ataque
interface Personagem {
  atacar(): string
}

// Classes de cada personagem implementando a interface
class Gandalf implements Personagem {
  atacar(): string {
    return 'Gandalf lança uma bola de fogo!'
  }
}

class Aragorn implements Personagem {
  atacar(): string {
    return 'Aragorn ataca com sua espada!'
  }
}

// Podemos adicionar um novo personagem facilmente
class Legolas implements Personagem {
  atacar(): string {
    return 'Legolas dispara uma flecha certeira!'
  }
}

// Classe Ataque utilizando a interface
class Ataque {
  private personagem: Personagem

  constructor(personagem: Personagem) {
    this.personagem = personagem
  }

  executarAtaque(): string {
    return this.personagem.atacar()
  }
}

// Uso da classe
const ataqueGandalf = new Ataque(new Gandalf())
console.log(ataqueGandalf.executarAtaque()) // Gandalf lança uma bola de fogo!

const ataqueAragorn = new Ataque(new Aragorn())
console.log(ataqueAragorn.executarAtaque()) // Aragorn ataca com sua espada!

const ataqueLegolas = new Ataque(new Legolas())
console.log(ataqueLegolas.executarAtaque()) // Legolas dispara uma flecha certeira!
