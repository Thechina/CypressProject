import GoogleElements from '../elements/barrigaReact.elements'

const googleElements = new GoogleElements

class GooglePageObjects {
    
    typeOptions(searchOptions) {
        googleElements.inputPesquisa().type(searchOptions)
    }

    clickBtnPesuisar() {
        googleElements.btnPesquisar().click()
    }

    clickMapsOptions() {
        googleElements.mapsOptions().click()
    }

    assertGoogleMenu(menuOptions) {
        googleElements.googleMenus().should('contain', menuOptions)
    }

}
export default GooglePageObjects