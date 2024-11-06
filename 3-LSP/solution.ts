// Aplicação do LSP com interfaces distintas

// Interface para Montaria Terrestre
interface MontariaTerrestre {
  mover(): string
}

// Interface para Montaria Aérea
interface MontariaAerea {
  voar(): string
}

// Implementação da classe Cavalo como montaria terrestre
class Cavalo implements MontariaTerrestre {
  mover(): string {
    return 'O cavalo corre pelo campo!'
  }
}

// Implementação da classe Aguia como montaria aérea
class Aguia implements MontariaAerea {
  voar(): string {
    return 'A águia voa pelos céus!'
  }
}

// Funções separadas para iniciar movimentos
function iniciarMovimentoTerrestre(montaria: MontariaTerrestre) {
  console.log(montaria.mover())
}

function iniciarMovimentoAereo(montaria: MontariaAerea) {
  console.log(montaria.voar())
}

// Uso das funções
iniciarMovimentoTerrestre(new Cavalo()) // O cavalo corre pelo campo!
iniciarMovimentoAereo(new Aguia()) // A águia voa pelos céus!
