<p align="center">
   <img src="assets/hobbit.png" width="80%" />
</p>
<h2 align="center">
  Senhor dos Anéis - S.O.L.I.D
</h2>

[![Autor](https://img.shields.io/badge/Student-FelipeRRPereira-407641?style=flat-square)](https://github.com/FelipeRRPereira)
[![Languages](https://img.shields.io/github/languages/count/FelipeRRPereira/solid?color=407641&label=Langueges&style=flat-square)](#)
[![GitHub issues](https://img.shields.io/github/issues/FelipeRRPereira/solid?color=407641&label=Issues&style=flat-square)](https://github.com/FelipeRRPereira/solid/issues)
[![GitHub forks](https://img.shields.io/github/forks/FelipeRRPereira/solid?color=407641&label=Forks&style=flat-square)](https://github.com/FelipeRRPereira/solid/network)
[![GitHub stars](https://img.shields.io/github/stars/FelipeRRPereira/solid?color=407641&label=Stars&style=flat-square)](https://github.com/FelipeRRPereira/solid/stargazers)

## Princípios SOLID

Os princípios SOLID são guias que ajudam a organizar o código, tornando-o mais claro e fácil de manter. Aqui estão eles, explicados por meio de exemplos inspirados em *Senhor dos Anéis*.

### 1. **Single Responsibility Principle (SRP) - Princípio da Responsabilidade Única**

Imagine que Aragorn e Frodo têm missões muito diferentes: Aragorn deve proteger o povo de Gondor, enquanto Frodo tem a tarefa de destruir o Anel. Se Frodo tentasse fazer o trabalho de Aragorn, ele se desviaria de sua jornada, e a missão de destruir o Anel poderia falhar. Da mesma forma, no código, cada classe deve ter uma única responsabilidade, concentrando-se em apenas uma tarefa. Isso facilita a manutenção, pois qualquer ajuste na “responsabilidade” não afeta outras funcionalidades.

### 2. **Open-Closed Principle (OCP) - Princípio Aberto-Fechado**

Gandalf é um mago sábio e versátil, que adapta suas habilidades de acordo com o que a jornada demanda — ele usa magia para guiar, proteger e lutar, mas nunca precisa "mudar sua essência" para fazer isso. No código, o OCP nos lembra que devemos poder adicionar novas funcionalidades (como Gandalf usa novos feitiços) sem modificar o código original. Por exemplo, se queremos adicionar novos tipos de personagens em uma aventura, criamos novos personagens sem alterar a estrutura existente. Isso mantém o código estável e flexível para expansão.

### 3. **Liskov Substitution Principle (LSP) - Princípio da Substituição de Liskov**

Aragorn e Legolas são guerreiros muito diferentes: um é um ranger, e o outro, um arqueiro élfico. No entanto, ambos podem lutar juntos no campo de batalha, e cada um cumpre seu papel de guerreiro de modo intercambiável em combate. O LSP sugere que, se temos uma classe base (como Guerreiro), qualquer classe derivada (como Aragorn ou Legolas) deve poder substituí-la sem impactar o comportamento esperado. Dessa forma, em um código que espera um guerreiro, tanto Aragorn quanto Legolas poderão entrar em ação, sem precisar de ajustes.

### 4. **Interface Segregation Principle (ISP) - Princípio da Segregação de Interface**

No Conselho de Elrond, cada membro da Sociedade do Anel possui habilidades distintas: Gandalf usa magia, Legolas é um exímio arqueiro e Gimli usa seu machado. Não faria sentido obrigar todos a aprender magia ou arco e flecha. No código, o ISP diz que uma classe não deve ser forçada a implementar funcionalidades que não usa. Em vez de uma interface ampla com todas as habilidades, devemos dividi-la em interfaces menores, como “Guerreiro” ou “Mago”, permitindo que cada personagem implemente apenas o que faz sentido para suas habilidades.

### 5. **Dependency Inversion Principle (DIP) - Princípio da Inversão de Dependência**

Frodo precisa de uma companhia diversificada para sua jornada — de guerreiros a magos. Ele não pode depender de alguém específico (como só Gandalf), mas sim de habilidades que o grupo como um todo oferece. No código, o DIP sugere que módulos de alto nível (como uma jornada) dependam de abstrações (habilidades) em vez de implementações concretas (um personagem específico). Isso permite que Frodo tenha flexibilidade para ter qualquer membro da Sociedade do Anel ao seu lado, desde que ele tenha as habilidades necessárias para a missão, facilitando a substituição de membros sem comprometer a missão.

---