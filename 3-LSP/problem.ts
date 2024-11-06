// Classe inicial com violação do LSP

class Montaria {
  mover(): string {
    return 'A montaria se move.'
  }
}

class CavaloA extends Montaria {
  mover(): string {
    return 'O cavalo corre pelo campo!'
  }
}

class AguiaA extends Montaria {
  mover(): string {
    throw new Error('A águia não pode correr, ela voa!')
  }

  voar(): string {
    return 'A águia voa pelos céus!'
  }
}

// Uso das classes
function iniciarMovimento(montaria: Montaria) {
  console.log(montaria.mover())
}

iniciarMovimento(new CavaloA()) // O cavalo corre pelo campo!
iniciarMovimento(new AguiaA()) // Erro: A águia não pode correr, ela voa!
