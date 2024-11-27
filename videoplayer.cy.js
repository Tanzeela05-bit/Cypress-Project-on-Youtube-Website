class videoplayer{
    visiturl(){
      cy.visit('https://www.youtube.com')

    }
    
    searchvideo(){
  cy.get('input#search').type('cypress')
  cy.get('button#search-icon-legacy').click(); // Click search button
 }
   selectFirstVideo() {
    cy.get('ytd-video-renderer').first().click(); // Click the first video result
}

   verifyVideoplayerisVisible(){
    cy.get('.html5-video-player').should('be.visible'); // Check if video player is visible
   }
   verifyVideoIsPlaying() {
    cy.get('.html5-video-player').should('have.class', 'playing-mode'); // Verify video is playing

   

   }


}
export default videoplayer;