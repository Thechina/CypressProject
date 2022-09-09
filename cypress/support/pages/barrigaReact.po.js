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
}
export default BarrigaReactPageObjects