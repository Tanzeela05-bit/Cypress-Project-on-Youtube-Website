class VideoQuality {
    visit() {
        cy.visit('https://www.youtube.com'); // Visit YouTube homepage
    }

    search(query) {
        cy.get('input#search').clear().type(query); // Type in search
        cy.get('button#search-icon-legacy').click(); // Click search button
    }

    clickFirstVideo() {
        cy.get('ytd-video-renderer').first().click(); // Click the first video from search results
    }

    openQualityMenu() {
        // Click the quality button on the video player
        cy.get('.ytp-settings-button').click(); // Open settings menu
        cy.contains('Quality').click(); // Click on "Quality" option in the menu
    }

    selectQuality(quality) {
        // Select a video quality (e.g., 1080p, 720p, etc.)
        cy.contains(quality).click(); // Click the desired quality (like '1080p')
    }

    verifyQualitySelected(quality) {
        // Ensure the selected quality is shown in the quality menu
        cy.get('.ytp-settings-button').click(); // Open settings again
        cy.contains(quality).should('have.class', 'ytp-selected'); // Verify selected quality
    }
}

export default VideoQuality;