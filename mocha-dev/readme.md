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

##LIB CHAI:
Essa lib serve para deixar os assert do node.js mais expressivo, escrevendo melhor ele de forma
que fique mais fácil de ser interpretado.

##LIB SINON:
Te dá a possibilidade de testar objetos e funções a um nível de maior controle
podendo alterar propriedades de funções e abrindo diversos cenarios.
