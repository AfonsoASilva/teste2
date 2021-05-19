/// <reference types="cypress" />
import HomePage from '../support/pageObjects/petz/homePage';
import Produto from '../support/pageObjects/petz/produto';
var products = require("../support/data/products.json");

context('Massivo', () => {

   var local = getPlace();

  products.forEach(function(data, index) {    
     it('Teste produto ' + index, () => {
      cy.visit(HomePage.url);    
      cy.get(HomePage.barraConsulta).click().type(data['nome']+"{enter}");  
      cy.screenshot(local+index.toString());
      cy.get(Produto.nome).contains(data['nome']);
      cy.get(Produto.preco).contains(data['preco']);
      cy.get(Produto.precoAssinante).contains(data['precoAssinante']);
      cy.get(Produto.adicionarCarrinho).click();
      cy.get(Produto.nome).contains(data['nome']);
      cy.get(Produto.preco).contains(data['preco']);      
    });
    
  })
})

function getPlace(){
  var dir = './output'      
      var datetime = new Date(new Date()-3600*1000*3);  
      var folderName = datetime.toISOString();
      folderName = folderName.replace(/T/, ' ').replace(/\..+/, '').replace(/:/, '-').replace(/\:.+/, '').toString();
      var location = dir+"/"+folderName+"/Teste produto "      
      return location.toString();
}