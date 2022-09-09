class BarrigaReactElements {
    
    inputEmail() {
        return cy.get('input[data-test="email"]');
    }

    inputPassword() {
        return cy.get('input[data-test="passwd"]');
    }

    btnEntrar() {
        return cy.contains('button', 'Entrar');
    }

    btnSettings() {
        return cy.get('i[title="settings"]');
    }

    menuContas() {
        return cy.contains('a', 'Contas');  
    }

    btnAlterar() {
        return cy.get('i[class="far fa-edit"]');
    }
}
export default BarrigaReactElements