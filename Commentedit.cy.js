class CommentEdit {
    visit() {
        cy.visit('https://www.youtube.com'); // Visit YouTube
    }

    login(username, password) {
        cy.get('button[aria-label="Sign in"]').click(); // Sign in button
        cy.get('input[type="email"]').type(username); // Enter username
        cy.get('button#identifierNext').click();
        cy.get('input[type="password"]').type(password); // Enter password
        cy.get('button#passwordNext').click(); // Click sign in
    }

    searchAndSelectVideo(query) {
        cy.get('input#search').type(query); // Search for a video
        cy.get('button#search-icon-legacy').click(); // Click search
        cy.get('ytd-video-renderer').first().click(); // Select the first video
    }

    postComment(comment) {
        cy.get('ytd-comment-simplebox').find('textarea').type(comment); // Post a comment
        cy.get('ytd-comment-simplebox').find('paper-button').click(); // Click "Comment" button
    }

    editComment(newComment) {
        cy.contains(newComment).parent().find('tp-yt-paper-icon-button').click(); // Edit button
        cy.get('ytd-comment-box').find('textarea').clear().type(newComment); // Edit the comment
        cy.get('ytd-commentbox').find('paper-button').click(); // Save the comment
    }

    verifyComment(newComment) {
        cy.contains(newComment).should('be.visible'); // Verify updated comment is visible
    }
}

export default CommentEdit;