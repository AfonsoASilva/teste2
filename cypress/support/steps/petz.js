/* global Given, Then, When */

import HomePage from '../pageObjects/petz/homePage';
import Produto from '../pageObjects/petz/produto';
import CarrinhoCompras from '../pageObjects/petz/carrinho';
import DataCommon from '../dataCommon';
import test from '../data/products.json';

Given("acesso o site da petz", () => {    
    cy.visit(HomePage.url);    
});

When("consulte por racao", () => {    
    cy.get(HomePage.barraConsulta).click().type("ração{enter}");

    cy.get(Produto.item).click();
});

Then("valide o nome do produto, preço normal e preço para assinante", () => {
     
    cy.get(Produto.nome).contains('Ração Golden Special Sabor Frango e Carne para Cães Adultos');

    cy.get(Produto.preco).contains('129,90');

    cy.get(Produto.precoAssinante).contains('116,91');
});

Then("insira o produto no carrinho de compras", () => {
    cy.get(Produto.adicionarCarrinho).click();
});

Then("valide se os dados do item continuam idênticos", () => {
    cy.get(CarrinhoCompras.resumo).contains('Ração Golden Special Sabor Frango e Carne para Cães Adultos');

    cy.get(CarrinhoCompras.preco).contains('129,90');
});

Then("finalize a compra", () => {
    cy.get(CarrinhoCompras.confirmar).click();
});

Then("carregue massa de dados", () => {
    var products = [
                        {"nome": "Alimento para peixe Alcon Guppy 20gr", "preco":"18,99", "precoAssinante": "17,09"}, 
                        {"nome": "Coleira Petz Geométrico para Gatos", "preco":"29,99", "precoAssinante": "26,99"}, 
                        {"nome": "Brinquedo Pawise Espelho com Sino para Pássaros", "preco":"29,99", "precoAssinante": "26,99"}                        
                    ];

    cy.task('log', '********************* This will be output to the terminal **************');
    // for(var k in products) {
    //     cy.task('log', products[k]["nome"]);
    //  }

     products.forEach(function(data, index) {
        it('Cada um dos testes do arquivo', () => {
            cy.task('log', data["nome"]);
            cy.visit(HomePage.url);    
            cy.get(HomePage.barraConsulta).click().type(data['nome']+"{enter}");
    
    
            cy.get(Produto.nome).contains(data['nome']);
            cy.get(Produto.preco).contains(data['preco']);
            cy.get(Produto.precoAssinante).contains(data['precoAssinante']);
    
            cy.get(Produto.adicionarCarrinho).click();
    
            //dados continuam identicos
            cy.get(Produto.nome).contains(data['nome']);
            cy.get(Produto.preco).contains(data['preco']);
        })        
      });
    // // cy.task('log',products[0]["nome"]);
    // cy.task('readFileMaybe', './products.json', ).then((textOrNull) => { 
    //     cy.task('log', textOrNull);
    // })

    // var dataCommon = new DataCommon();    
    // var products = dataCommon.getProduct()
    // cy.log(products);
    // for(var product in products) {
    //     cy.log(product['nome']);
    //  }

});

