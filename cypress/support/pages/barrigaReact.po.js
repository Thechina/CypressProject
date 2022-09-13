import BarrigaReactElements from '../elements/barrigaReact.elements'

const barrigaReactElements = new BarrigaReactElements

class BarrigaReactPageObjects {
    
    typeEmail(email) {
      barrigaReactElements.inputEmail().type(email);
    }

    typePassword(passwd) {
        barrigaReactElements.inputPassword().type(passwd);
    }
    
    clickEntrar() {
        barrigaReactElements.btnEntrar().click();
    }

    clickSettings() {
        barrigaReactElements.btnSettings().click();
    }

    clickConta() {
        barrigaReactElements.menuContas().click();
    }
    
    clickAlterar(account) {
        cy.contains('td', account).parent().find('i[class="far fa-edit"]').click();
    }

    clickReset() {
        barrigaReactElements.btnReset().click();
    }

    clickCadastrarMovimentacoes() {
        barrigaReactElements.menuCadastrarMovimentacoes().click();
    }

    typeDescricao(banco) {
        barrigaReactElements.inputDescricao().type(banco);
    }

    typeValue() {
        barrigaReactElements.inputValue().type(1000);
    }


    typeInteressado(aluguel) {
        barrigaReactElements.inputInteressado().type(aluguel);
    }


    clickSalvar() {
        barrigaReactElements.btnSalvar().click();
    }

    clickExtrato() {
        barrigaReactElements.menuExtrato().click();
    }

   

    clickReturnHome() {
        barrigaReactElements.retornoHome().click();
    }

    clickSettings() {
        barrigaReactElements.btnSettings().click();
    }

    clickExit() {
        barrigaReactElements.btnExit().click();
    }


}
export default BarrigaReactPageObjects