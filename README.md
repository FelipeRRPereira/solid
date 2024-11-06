## Princípios SOLID

Os princípios SOLID são diretrizes de design de código que ajudam a criar software modular, de fácil manutenção e extensível. Cada letra de SOLID representa um princípio:

### 1. **Single Responsibility Principle (SRP) - Princípio da Responsabilidade Única**

Cada classe deve ter uma única responsabilidade, ou seja, um motivo único para mudar. Isso significa que uma classe deve ser focada em uma única funcionalidade ou tarefa. Isso facilita a manutenção, pois alterações em uma responsabilidade não afetam outras funcionalidades.

### 2. **Open-Closed Principle (OCP) - Princípio Aberto-Fechado**

O código deve estar aberto para extensão, mas fechado para modificação. Em outras palavras, você deve poder adicionar novos comportamentos ou funcionalidades através de extensão, sem alterar o código existente. Isso promove a reutilização e minimiza o risco de introduzir bugs em funcionalidades já implementadas.

### 3. **Liskov Substitution Principle (LSP) - Princípio da Substituição de Liskov**

Objetos de uma classe derivada devem poder substituir objetos de sua classe base sem alterar o comportamento do programa. Em essência, isso significa que as subclasses devem manter as funcionalidades esperadas da classe base, evitando efeitos colaterais indesejados quando um objeto é substituído por outro.

### 4. **Interface Segregation Principle (ISP) - Princípio da Segregação de Interface**

Classes não devem ser forçadas a implementar interfaces que não utilizam. Em vez de criar uma única interface ampla para várias funcionalidades, divida-as em interfaces específicas para cada responsabilidade. Isso mantém as classes leves e focadas em suas responsabilidades reais.

### 5. **Dependency Inversion Principle (DIP) - Princípio da Inversão de Dependência**

Módulos de alto nível não devem depender de módulos de baixo nível, mas de abstrações. As dependências devem estar baseadas em interfaces ou classes abstratas, e não em implementações concretas. Isso permite que os módulos sejam desacoplados e facilita a substituição de implementações sem alterar o módulo principal.

---