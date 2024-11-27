class CommentVideo {
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

    postComment(commentText) {
        // Scroll to the comment box and type the comment
        cy.get('#placeholder-area').scrollIntoView().click(); 
        cy.get('#contenteditable-root').type(commentText); // Type the comment
        cy.get('ytd-comment-simplebox-header button#submit-button').click(); // Submit the comment
    }

    verifyCommentPosted(commentText) {
        cy.contains(commentText).should('be.visible'); // Verify that the comment is visible
    }
}

export default CommentVideo;