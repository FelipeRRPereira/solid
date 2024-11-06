// Classe com responsabilidade única de representar um personagem carregando o Anel
class Character {
  private name: string
  private hasRing: boolean

  constructor(name: string, hasRing: boolean) {
    this.name = name
    this.hasRing = hasRing
  }

  carryRing() {
    if (this.hasRing) {
      console.log(`${this.name} está carregando o Anel.`)
    } else {
      console.log(`${this.name} não está com o Anel.`)
    }
  }
}

// Classe com responsabilidade única de gerenciar a localização de um personagem
class LocationService {
  private location: string

  constructor(initialLocation: string) {
    this.location = initialLocation
  }

  showLocation(characterName: string) {
    console.log(`${characterName} está em ${this.location}.`)
  }

  saveLocation(characterName: string) {
    console.log(`Localização de ${characterName} salva no banco de dados.`)
    // Lógica para salvar a localização...
  }
}

// Uso
const frodo = new Character('Frodo', true)
const bilbo = new Character('Bilbo', false)
const frodoLocationService = new LocationService('Bree')
const bilboLocationService = new LocationService('Bolseiro')

frodo.carryRing()
frodoLocationService.showLocation('Frodo')
frodoLocationService.saveLocation('Frodo')

bilbo.carryRing()
bilboLocationService.showLocation('Bilbo')
bilboLocationService.saveLocation('Bilbo')
