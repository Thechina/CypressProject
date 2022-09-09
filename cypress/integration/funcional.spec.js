/// <reference types= "cypress" />
import BarrigaReactPageObjects from '../support/pages/barrigaReact.po'

const barrigaReactPageObjects = new BarrigaReactPageObjects  

let url = 'https://barrigareact.wcaquino.me/'

it('Access application', () => {
   cy.visit(url);
})

it('Login', () => {
    barrigaReactPageObjects.typeEmail('suguiomarcelo@gmail.com');
    barrigaReactPageObjects.typePassword('Brad050977');
    barrigaReactPageObjects.clickEntrar();
 })

 it('Access Account', () => {
    barrigaReactPageObjects.clickSettings();
    barrigaReactPageObjects.clickConta();
 })

 it('Update Conta alterada option', () => {
    barrigaReactPageObjects.clickAlterar('Conta para saldo');
 })

