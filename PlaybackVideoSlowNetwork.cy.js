class VideoPlaybackSlowNetwork {
    visit() {
        cy.visit('https://www.youtube.com'); // Visit YouTube homepage
    }

    search(query) {
        cy.get('input#search').type(query); // Search for the video
        cy.get('button#search-icon-legacy').click(); // Click the search button
    }

    clickFirstVideo() {
        cy.get('ytd-video-renderer').first().click(); // Click on the first video
    }

    simulateSlowNetwork() {
        cy.intercept('').as('video'); // Intercept all network requests
        cy.setNetworkSpeed('Slow 3G'); // Simulate Slow 3G network speed
    }

    verifyVideoPlaying() {
        cy.get('video').should('have.prop', 'paused', false); // Verify the video is playing
    }
}

export default VideoPlaybackSlowNetwork;