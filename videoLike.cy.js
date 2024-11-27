class LikeVideo {
    visit() {
        cy.visit('https://www.youtube.com'); // Visit YouTube homepage
    }

    search(query) {
        cy.get('input#search').clear().type(query); // Type in the search query
        cy.get('button#search-icon-legacy').click(); // Click the search button
    }

    clickFirstVideo() {
        cy.get('ytd-video-renderer').first().click(); // Click on the first video from search results
    }

    clickLikeButton() {
        cy.get('yt-icon-button[aria-label="I like this"]').click(); // Click the like button
    }

    verifyLikeButtonClicked() {
        cy.get('yt-icon-button[aria-label="I like this"]')
            .should('have.attr', 'aria-pressed', 'true'); // Verify that the like button is clicked
    }
}

export default LikeVideo;