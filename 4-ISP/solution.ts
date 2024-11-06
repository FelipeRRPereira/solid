// Aplicação do ISP com interfaces segregadas

interface Guerreiro {
  atacarComEspada(): string
}

interface Mago {
  usarMagia(): string
}

// Implementação dos personagens usando interfaces específicas
class Gandalf2 implements Mago {
  usarMagia(): string {
    return 'Gandalf lança um feitiço poderoso!'
  }
}

class Aragorn2 implements Guerreiro {
  atacarComEspada(): string {
    return 'Aragorn ataca com sua espada!'
  }
}

// Uso das classes
const gandalf2 = new Gandalf2()
console.log(gandalf2.usarMagia()) // Gandalf lança um feitiço poderoso!

const aragorn2 = new Aragorn2()
console.log(aragorn2.atacarComEspada()) // Aragorn ataca com sua espada!
