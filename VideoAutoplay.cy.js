class VideoAutoplay {
    visit() {
        cy.visit('https://www.youtube.com'); // Visit YouTube homepage
    }

    search(query) {
        cy.get('input#search').clear().type(query); // Type in search
        cy.get('button#search-icon-legacy').click(); // Click search button
    }

    clickFirstVideo() {
        cy.get('ytd-video-renderer').first().click(); // Click first video
    }

    verifyAutoplay() {
        // Wait for the first video to play
        cy.wait(5000); 

        // Check if the next video starts playing by checking video time
        cy.get('video').should('have.prop', 'currentTime').and('be.greaterThan', 0);
    }
}

export default VideoAutoplay;