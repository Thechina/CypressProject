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
 
 it('Reset it option', () => {
   barrigaReactPageObjects.clickSettings();
   barrigaReactPageObjects.clickReset('Resetar');
})

it('Register transactions', () => {
   barrigaReactPageObjects.clickCadastrarMovimentacoes();
   barrigaReactPageObjects.typeDescricao('banco');
   barrigaReactPageObjects.typeValue('1000');
   barrigaReactPageObjects.typeInteressado('aluguel');
   barrigaReactPageObjects.selectConta('Conta para movimentacoes');
   barrigaReactPageObjects.clickSalvar();
})

it('Look extract', () => {
   barrigaReactPageObjects.clickSettings();
   barrigaReactPageObjects.clickExtrato();
})

it('Return Home', () => {
   barrigaReactPageObjects.clickReturnHome();
})

it('Reset it option', () => {
   barrigaReactPageObjects.clickSettings();
   barrigaReactPageObjects.clickExit('Sair');
})
