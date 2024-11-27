class TrendingVideo{
    visit() {
        cy.visit('https://www.youtube.com'); // Visit YouTube homepage
    }
    goToTrending() {
        cy.get('a[href="/feed/trending"]').click(); // Go to the Trending page
    }

    verifyFirstTrendingVideo() {
        cy.get('ytd-video-renderer').first().should('be.visible'); // Ensure the first trending video is visible
    }
}

export default TrendingVideo();