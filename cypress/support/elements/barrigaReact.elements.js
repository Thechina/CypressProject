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
    btnReset() {
        return cy.contains('a', 'Resetar');
    }

    menuExtrato() {
        return cy.get('i[title="extrato"]');  
    }

    menuCadastrarMovimentacoes() {
        return cy.get('i[class="fas fa-hand-holding-usd"]');
    }

    retornoHome() {
        return cy.get('i[class="fas fa-home"]');
    }
}
export default BarrigaReactElements