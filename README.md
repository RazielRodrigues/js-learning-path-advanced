# JavaScript Learning Path: Manipulando DOM

    Com javascript e possivel selecionar por:
    
    ID:
        document.getElementById('primeiro').classList.add('destaque');
    
    Tag:
        const divs = document.getElementsByTagName('div');
        Array.from(divs).forEach(e => e.classList.remove('destaque'));
        const divsArray = [...divs];
        divsArray.forEach(e => e.classList.add('destaque'));
        - classe

    Classes:
    const ultimosElementos = document.getElementsByClassName('ultimo');
    for(let e of ultimosElementos){
        e.classList.remove('destaque');
    }

    Quando se seleciona um HTML ele retorna uma HTML collection, esse tipo de estrutura
    nao é iteraval como um array mas existem formas de convertela para então trabalhar
    copmo se fosse um array.