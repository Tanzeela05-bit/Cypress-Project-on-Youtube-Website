class WatchLaterRemove {
    visit() {
        cy.visit('https://www.youtube.com'); // Visit YouTube homepage
    }

    searchAndSelectVideo(query) {
        cy.get('input#search').type(query); // Search for the video
        cy.get('button#search-icon-legacy').click(); // Click search button
        cy.get('ytd-video-renderer').first().click(); // Click on the first video
    }

    addToWatchLater() {
        cy.get('button.ytd-button-renderer.style-scope.ytd-menu-renderer').contains('Save').click(); // Click the "Save" button
        cy.get('ytd-menu-service-item-renderer').contains('Watch later').click(); // Select "Watch later"
    }

    goToWatchLater() {
        cy.get('button[aria-label="Library"]').click(); // Go to the Library
        cy.get('yt-formatted-string').contains('Watch later').click(); // Click on "Watch later" playlist
    }

    removeFromWatchLater() {
        cy.get('ytd-playlist-video-renderer').first().find('button[aria-label="Remove from Watch later"]').click(); // Click to remove video
    }

    verifyVideoRemoved() {
        cy.get('ytd-playlist-video-renderer').should('not.exist'); // Verify no videos are in the "Watch later" list
    }
}

export default WatchLaterRemove;