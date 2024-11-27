class videoplayback{
    visiturl(){
    cy.visit('https://www.youtube.com'); // Navigate to YouTube homepage
  }
  searchVideo() {
    cy.get('input#search').type('cypress'); // Search for a video
    cy.get('button#search-icon-legacy').click(); // Click on the search button
  }

  selectFirstVideo() {
    cy.get('ytd-video-renderer').first().click(); // Click the first video in the search results
  }

  verifyVideoPlayerIsVisible() {
    cy.get('.html5-video-player').should('be.visible'); // Verify the video player is displayed
    //cy.get('[id="movie_player"]').should('be.visible')
}

  verifyVideoIsPlaying() {
    cy.get('.html5-video-player').should('have.class', 'playing-mode'); // Check if the video is playing
    //cy.get('.html5-video-player').should('have.attr','title', 'playing-mode'); // Check if the video is playing
  }
}

export default videoplayback;