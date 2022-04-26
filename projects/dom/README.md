# JavaScript Learning Path: Manipulando DOM


#### Selecionando com document.getElement
    
    ID:
        document.getElementById('primeiro').classList.add('destaque');
    
    Tag:
        const divs = document.getElementsByTagName('div');

    Classes:
        const ultimosElementos = document.getElementsByClassName('ultimo');

    Name:
        <form name="pesquisa">
        console.log(document.pesquisa);
        document.pesquisa.q.value = 'Linux Brasil';

    Quando se seleciona um HTML com document.getElement ele retorna uma HTML collection, 
    esse tipo de estrutura nao é iteraval como um array.
    Mas existem formas de convertela para então trabalhar
    copmo se fosse um array.

        Array.from(divs).forEach(e => e.classList.remove('destaque'));
        const divsArray = [...divs];

#### Selecionando com document.querySelector

    Com o querySelector se usa a notação de CSS para selecionar os elementos,
    alem de que ua seleção usando querySelector retornar uma nodeList
    e nao um HTMLCollection Mas tambem é possivel converter.

    QuerySelector:
        document.querySelector('#primeiro').classList.add('destaque');

    QuerySelectorAll:
        const selecionar = seletor => 
        document.querySelectorAll(seletor).forEach(e => e.classList.add('destaque'));

        const deselecionar = seletor => 
        document.querySelectorAll(seletor).forEach(e => e.classList.remove('destaque'));

#### Modificando atributos

    Podemos alterar atributos de elementos, sejam personalizados ou naturais do DOM.

        lista = document.querySelector(' div ul[destino="escritório"] ');
        console.log(lista.childNodes);
        console.log(lista.destino);
        console.log(lista.destino);
        console.log(lista.getAttribute('destino'));
        console.log(lista.hasAttribute('destino'));
        console.log(lista.setAttribute('teste','destino'));
        console.log(lista.removeAttribute('destino'));
        console.log(lista.dataset.urgencia);
        lista.dataset.urgencia = 4;
        console.log(lista.getAttribute('data-urgencia'));

#### Modificando classes

        const div = document.querySelector('div');
        const classes = div.classList;
        classes.add('destaque');
        classes.remove('destaque');
        classes.toggle('destaque');
        console.log(classes.contains('destaque'));
        console.log(classes.length);
        classes.toggle('destaque');
        console.log(classes.length);

        classes.add('destaque1');
        classes.add('destaque2');
        console.log(classes.length);
        
        for (const c of classes) {
            console.log(c);
        }
        classes.forEach(element => {
            console.log(element);
        });

#### Modificando DOM

    ...