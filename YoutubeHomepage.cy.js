class YouTubeHomePage {
    visitHomePage() {
      cy.visit('https://www.youtube.com');
    }
  
    getSearchBar() {
     cy.get('input#search').type();
     
    }
    getSearchButton() {
      cy.get('button#search-icon-legacy').click();
    }
  
    }
  
  
  export default YouTubeHomePage;