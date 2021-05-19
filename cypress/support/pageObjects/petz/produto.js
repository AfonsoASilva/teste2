/// <reference types="Cypress" />

const url = Cypress.config("baseUrl")

class Produto {  

    static url = 'https://www.petz.com.br/produto/racao-golden-special-sabor-frango-e-carne-para-caes-adultos-71343';

    //menu superior
    static item = ':nth-child(3) > #produto-href';
   
    static nome = 'h1';

    static preco = '.price-current';

    static precoAssinante = '.price-subscriber';
    
    static adicionarCarrinho = '#adicionarAoCarrinho';
}

export default Produto;