// Classe inicial com violação do OCP

class AtaqueA {
  atacar(personagem: string): string {
    if (personagem === 'Gandalf') {
      return 'Gandalf lança uma bola de fogo!'
    } else if (personagem === 'Aragorn') {
      return 'Aragorn ataca com sua espada!'
    } else {
      return 'Personagem desconhecido!'
    }
  }
}

// Uso da classe
const ataque = new AtaqueA()
console.log(ataque.atacar('Gandalf')) // Gandalf lança uma bola de fogo!
console.log(ataque.atacar('Aragorn')) // Aragorn ataca com sua espada!
// Para adicionar Legolas, precisaríamos modificar a classe.
