class Language {
    visit() {
        cy.visit('https://www.youtube.com'); // Visit YouTube homepage
    }

    openLanguageMenu() {
        cy.get('ytd-topbar-menu-button-renderer').click(); // Click on the menu (three dots) on the top bar
        cy.contains('Language').click(); // Click on the "Language" option
    }

    changeLanguageTo(language) {
        cy.contains(language).click(); // Select a language from the list (e.g., Spanish, French)
    }

    verifyLanguageChanged(language) {
        // Check if the UI contains a text in the selected language (verify the language change)
        cy.get('h1').should('contain', language); // Just as an example, check if the title contains the language name
    }
}

export default Language;