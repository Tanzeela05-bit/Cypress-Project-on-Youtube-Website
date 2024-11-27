class SubscribeChannel {
    visit() {
        cy.visit('https://www.youtube.com'); // Visit YouTube homepage
    }

    search(query) {
        cy.get('input#search').clear().type(query); // Type in the search query
        cy.get('button#search-icon-legacy').click(); // Click the search button
    }

    clickFirstChannel() {
        cy.get('ytd-channel-renderer').first().click(); // Click on the first channel from search results
    }

    clickSubscribeButton() {
        // Subscribe button can be a toggle, we need to ensure we click it only if it's not already "Subscribed"
        cy.get('ytd-subscribe-button-renderer').find('button').should('be.visible').click(); // Click subscribe button
    }

    verifySubscribed() {
        // After subscribing, the button should change to "Subscribed"
        cy.get('ytd-subscribe-button-renderer').find('button')
            .should('have.attr', 'aria-label', 'Subscribed'); // Ensure the button text is "Subscribed"
    }
}

export default SubscribeChannel;