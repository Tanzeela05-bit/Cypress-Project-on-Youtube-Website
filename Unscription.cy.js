class UnsubscribeChannel {
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

    clickSubscribedButton() {
        // If the user is already subscribed, the button will show as "Subscribed"
        cy.get('ytd-subscribe-button-renderer').find('button').should('have.attr', 'aria-label', 'Subscribed').click(); // Click the "Subscribed" button
    }

    clickUnsubscribeButton() {
        // After clicking the "Subscribed" button, an unsubscribe option will appear
        cy.get('ytd-popup-container').find('yt-formatted-string').contains('Unsubscribe').click(); // Click "Unsubscribe"
    }

    verifyUnsubscribed() {
        // After unsubscription, the button should change back to "Subscribe"
        cy.get('ytd-subscribe-button-renderer').find('button')
            .should('have.attr', 'aria-label', 'Subscribe'); // Ensure the button text is "Subscribe"
    }
}

export default UnsubscribeChannel;