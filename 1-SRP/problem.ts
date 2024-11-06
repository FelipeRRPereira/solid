// Violando o SRP
class Frodo {
  private hasRing: boolean;
  private location: string;

  constructor() {
    this.hasRing = true;
    this.location = "Bree";
  }

  carryRing() {
    if (this.hasRing) {
      console.log("Frodo está carregando o Anel.");
    }
  }

  showLocation() {
    console.log(`Frodo está em ${this.location}.`);
  }

  saveLocation() {
    console.log("Localização de Frodo salva no banco de dados.");
    // Lógica para salvar a localização...
  }
}

class Bilbo {
  private hasRing: boolean;
  private location: string;

  constructor() {
    this.hasRing = false;
    this.location = "Bolseiro";
  }

  carryRing() {
    if (this.hasRing) {
      console.log("Bilbo está carregando o Anel.");
    }
  }

  showLocation() {
    console.log(`Bilbo está em ${this.location}.`);
  }

  saveLocation() {
    console.log("Localização de Bilbo salva no banco de dados.");
    // Lógica para salvar a localização...
  }
}

// Uso
const frodoNew = new Frodo();
const bilboNew = new Bilbo();

frodoNew.carryRing();
frodoNew.showLocation();
frodoNew.saveLocation();

bilboNew.carryRing();
bilboNew.showLocation();
bilboNew.saveLocation();
