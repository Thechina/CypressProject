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

    menuCadastrarMovimentacoes() {
        return cy.get('i[class="fas fa-hand-holding-usd"]');
    }

    inputDescricao() {
        return cy.get('[data-test=descricao]');
    }

    inputValue() {
        return cy.get('[data-test="valor"]');
    }

    inputInteressado() {
        return cy.get('[data-test=envolvido]');
    }

    selectConta() {
        return cy.get('select[data-test="conta"]');
    }

    btnSalvar() {
        return cy.get('button[class="btn btn-block btn-primary"]');
    }

    menuExtrato() {
        return cy.get('i[title="extrato"]');  
    }

    retornoHome() {
        return cy.get('i[class="fas fa-home"]');
    }

    btnSettings() {
        return cy.get('i[title="settings"]');
    }

    btnExit() {
        return cy.contains('a', 'Sair');
    }
   
}
export default BarrigaReactElements