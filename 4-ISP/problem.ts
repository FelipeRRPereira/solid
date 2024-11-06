// Classe inicial com violação do ISP

interface PersonagemA {
  atacarComEspada(): string
  usarMagia(): string
}

class Gandalf1 implements PersonagemA {
  atacarComEspada(): string {
    return '' // Gandalf não usa espada como sua principal arma
  }

  usarMagia(): string {
    return 'Gandalf lança um feitiço poderoso!'
  }
}

class Aragorn1 implements PersonagemA {
  atacarComEspada(): string {
    return 'Aragorn ataca com sua espada!'
  }

  usarMagia(): string {
    return '' // Aragorn não utiliza magia
  }
}

// Uso das classes
const gandalf = new Gandalf1()
console.log(gandalf.usarMagia()) // Gandalf lança um feitiço poderoso!
console.log(gandalf.atacarComEspada()) // Problema: implementado mas não usado

const aragorn = new Aragorn1()
console.log(aragorn.atacarComEspada()) // Aragorn ataca com sua espada!
console.log(aragorn.usarMagia()) // Problema: implementado mas não usado
