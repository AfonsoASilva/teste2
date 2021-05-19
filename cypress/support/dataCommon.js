 class DataCommon {    

    getProduct() {
        var products = require('./data/products.json');                   
        return products;
     }
  }
  module.exports = DataCommon; 