class SearchInvalid {
    visit() {
        cy.visit('https://www.youtube.com'); // Visit YouTube homepage
    }

    search(query) {
        cy.get('input#search').clear().type('query'); // Type the invalid search query in the search bar
        cy.get('button#search-icon-legacy').click(); // Click the search button
    }

    verifyNoResultsMessage() {
        // Check if "No results" message or similar text is visible
        cy.get('#contents').should('contain', 'No results for'); // Verify no results are found
    }
}

export default SearchInvalid;