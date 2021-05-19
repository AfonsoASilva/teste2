/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require('fs');
const fsExtra = require('fs-extra');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  on('task', {
    log(message) {
      console.log(message)

      return null
    },
  })

  on('task', {
    saveScreenshot() {
      dir = './output'
      // if (!fs.existsSync(dir)){
      //   fs.mkdirSync(dir);        
      // }
      var datetime = new Date(new Date()-3600*1000*3);  
      folderName = datetime.toISOString();
      folderName = folderName.replace(/T/, ' ').replace(/\..+/, '').replace(/:/, '-').replace(/\:.+/, '').toString();
      location = dir+"/"+folderName+"/Teste produto"
      // fs.mkdirSync(location);  
      // console.log('chegou!!!!!!!!!!!!!!!!!!!!!')
      // fsExtra.move('./cypress/screenshots/', dir+'/'+folderName, function (err) {
      // if (err) return console.error(err)
      // console.log("success!")
      // })
      return location.toString();
    },
  })
}

