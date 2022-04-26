#Tipos de testes e como são efetuados.

## Testes automatizados:

* Testes unitários, é quando você testa uma funções, metodos classes etc. é o menor teste possível do seu código.

* Testes integrados, testa a integração de funções combinadas, duas combinadas ou seja é testar o seu proprio codigo junto.

* Testes funcionais, aqui você testa uma regra de negocio do seu programa, o famoso teste caixa preta voce testa literalmente como um usuario. Mas sem se importar com a tecnologia.

* Podemos pensar nisso como uma piramide de testes começando de cima o primeiro é o menos custoso e o ultimo o mais custoso.

## Testes manuais e automatizados:

* Testes usabilidade
* Testes de aceitação do usuário
* Protótipos
* Testes funcionais
* Exemplos
* Alpha e beta
* Mais...

## Ferramentas de teste

* Testes de carga e perfomance
* Testes de segurança
* Mais...

# TDD (Test Driven Development)

É um dos pilares do Extreme programming, consite em testar e refatorar em pequenos clicos, onde voce escreve o teste antes do codigo, faz o mesmo passar e refatorar o código. O unico dódigo que se escreve ele serve apenas pra passar no teste depois voce rescreve ele denovo para melhorar ele seguindo as etapas:

Escrita do teste -> Escrita do código -> Refatoração

### Vantagens

* Feedback rápido
* Maior segurança em alterações e novas funcionalidades
* Codigo mais limpo
* Produtividade

# BDD (Behavior Drive Development)

Técnicas de desenvolvimento ágil que visa integrar regras de negócio com linguagens de programação. Voce escreve aquele teste e explica o que ele faz dentro da regra de negocio, o porque ele ta ali, e tambem descreve o que ele faz dentro da regra de negocio.

## Pilares

* Testes
* Documentação (readme.md)
* Exemplos

### Vantagens

* Compartilhamento de conhecimento
* Documentação dinâmica
* Visao do todo

# Como usar o mocha nos testes:

* Instalar o mocha primeiro, depois configurar o package json com o mocha como biblioteca de teste, ele sempre vai fazer os teste dentro de uma pasta que tenha o nome "test"

* funlçao describe onde o nome da função e o primeiro parametro
* tem a função it que é sobre o comportamento espoeradop da classe
* depois é necessario ter o modulo natyivo do node assert
* e tambem inportar a classe para dentro da pasta de teste
* depois é necessario instaciar a classe e escrever o comportamento esperado dela
* .only executa apenas um teste
* .skip pula um determinado teste
* Os hooks server para controlar os testes temos os hooks: before, beforeEach, after e afterEach.s
* Dando a possibilidade de alterar os dados que vão para dentro dos metodos e outras coisas.

## LIB CHAI:
Essa lib serve para deixar os assert do node.js mais expressivo, escrevendo melhor ele de forma
que fique mais fácil de ser interpretado.

## LIB SINON:
Te dá a possibilidade de testar objetos e funções a um nível de maior controle
podendo alterar propriedades de funções e abrindo diversos cenarios.
