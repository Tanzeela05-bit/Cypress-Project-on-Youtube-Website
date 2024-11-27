import YouTubeHomePage from "../../support/project/homepage.cy";
import SearchResultsPage from "../../support/project/SearchResultPage.cy";
import links from "../../support/project/Links.cy";
import PageLoads from "../../support/project/homepageloads.cy";
import videoplayer from "../../support/Project/videoplayer.cy";
import videoplayback from "../../support/project/videoplayback.cy";
import LoginPage from "../../support/project/signin.cy";
import TrendingVideo from "../../support/project/trendingvideos.cy";
import SearchInvalid from "../../support/project/searchinvalid.cy";
import LikeVideo from "../../support/project/videoLike.cy";
import CommentVideo from "../../support/project/PostComment.cy";
import Logout from "../../support/project/signout.cy";
import SubscribeChannel from "../../support/project/Subscribe.cy";
import UnsubscribeChannel from "../../support/project/Unscription.cy";
import VideoAutoplay from "../../support/project/VideoAutoplay.cy";
import VideoQuality from "../../support/project/videoquality.cy";
import VideoPlaybackSlowNetwork from "../../support/project/PlaybackVideoSlowNetwork.cy";
import CommentEdit from "../../support/project/Commentedit.cy";
import WatchLater from "../../support/project/watchLater.cy";
import WatchLaterRemove from "../../support/project/RemoveWatchListVideo.cy";
import Language from "../../support/project/language.cy";


describe('Verify YouTube Search Functionality', () => {
  const youtubeHomePage = new YouTubeHomePage();
  const searchResultsPage = new SearchResultsPage();
  const link = new links();
  const pageload = new PageLoads();
  const Videoplayer = new videoplayer();
  const Videoplayback = new videoplayback();
  const loginPage = new LoginPage();
  const trendingvideo = new TrendingVideo();
  const searchInvalid = new SearchInvalid();
  const likeVideo = new LikeVideo();
  const commentVideo = new CommentVideo(); 
  const logout = new Logout(); 
  const subscribeChannel = new SubscribeChannel();
  const unsubscribeChannel = new UnsubscribeChannel(); 
  const videoAutoplay = new VideoAutoplay(); 
  const videoQuality = new VideoQuality();
  const videoPlaybackSlowNetwork = new VideoPlaybackSlowNetwork();
  const commentEdit = new CommentEdit(); 
  const watchLater = new WatchLater(); 
  const watchLaterRemove = new WatchLaterRemove(); 
  const language = new Language(); 

  beforeEach(() => {
    youtubeHomePage.visitHomePage();
  });

  it('should search for a video and display search results', () => {

    youtubeHomePage.visitHomePage();
// Perform a search
    youtubeHomePage.getSearchBar()
    // Verify search results are displayed
    searchResultsPage.getFirstVideo() 
    link.clickonlink()
        searchResultsPage.clickFirstVideo() // Verify the first result title contains the search query
  });

  it('should allow selecting the first video from the search results', () => {// Click the first result
    searchResultsPage.getVideoPlayer() // Verify the video player loads (checking for its presence)
  });

it('verify Youtube homepage loads successfully', () => {
    pageload.visiturl()  //vist url
    pageload.title()     //check the page title
    pageload.logo()   // check logo visibility
    pageload.searchbar()  // check search bar visibitity
    pageload.signinbutton()  // check the sign in button visibility
    
});

it('', () => {  //BUG
    Videoplayer.visiturl()  //Open YouTube homepage
    Videoplayer.searchvideo() // search for video
    Videoplayer.selectFirstVideo() // click the 1st video
    Videoplayer.verifyVideoplayerisVisible()  // verify the video player  //(it is a bug =. video player element is not visible)
    Videoplayer.verifyVideoIsPlaying()  // ensure the video is playing

});

it('verify the video playback', () => {  //BUG
    Videoplayback.visiturl()  
    Videoplayback.searchVideo()
    Videoplayback.selectFirstVideo()
    Videoplayback.verifyVideoPlayerIsVisible()
    Videoplayback.verifyVideoIsPlaying()
    
});
it('should log in successfully with valid credentials', () => {
    // Replace these with actual test credentials
    const email = 'shaiktanzeelas@gmail.com'; 
    const password = 'Tanzeela123$';

    loginPage.clickSignInButton();
    loginPage.enterEmail(email);
    loginPage.enterPassword(password);
    loginPage.verifyLoginSuccess();
  });

it('YouTube Trending Videos', () => {
    trendingvideo.visit() 
    trendingvideo.goToTrending()
    trendingvideo.verifyFirstTrendingVideo()

});

it('', () => {    //BUG
    //query = 'ghyn';
    searchInvalid.visit(); // Visit YouTube homepage
    searchInvalid.search('asdklfjalskdjflkjsd'); // Search for a non-existent term
    searchInvalid.verifyNoResultsMessage(); // Verify the "No results" message appears

});

it('should like a video', () => {
    likeVideo.visit(); // Visit YouTube
    likeVideo.search('Cypress Tutorial'); // Search for a video
    likeVideo.clickFirstVideo(); // Click the first video
    likeVideo.clickLikeButton(); // Click the like button
    likeVideo.verifyLikeButtonClicked(); // Verify the like button is clicked
})    
it('should post a comment on a video', () => {
    const commentText = 'Great tutorial on Cypress!'; // The comment we want to post
    commentVideo.visit(); // Visit YouTube
    commentVideo.search('Cypress Tutorial'); // Search for a video
    commentVideo.clickFirstVideo(); // Click the first video
    commentVideo.postComment(commentText); // Post the comment
    commentVideo.verifyCommentPosted(commentText); // Verify the comment is posted
});
it('should log out from YouTube', () => {
        const email = 'your-email@gmail.com'; 
        const password = 'your-password'; 

        logout.visit(); // Visit YouTube
        logout.signIn(email, password); // Log in with valid credentials
        logout.clickProfileIcon(); // Click on the profile icon
        logout.signOut(); // Sign out from the account
        logout.verifyLoggedOut(); // Verify the user is logged out
    })

    it('should subscribe to a channel', () => {
        const channelName = 'Cypress IO'; 

        subscribeChannel.visit(); // Visit YouTube
        subscribeChannel.search(channelName); // Search for the channel
        subscribeChannel.clickFirstChannel(); // Click on the first channel
        subscribeChannel.clickSubscribeButton(); // Click the subscribe button
        subscribeChannel.verifySubscribed(); // Verify that the "Subscribe" button is now "Subscribed"
    });
    it('should unsubscribe from a channel', () => {
        const channelName = 'Cypress IO'; 

        unsubscribeChannel.visit(); // Visit YouTube
        unsubscribeChannel.search(channelName); // Search for the channel
        unsubscribeChannel.clickFirstChannel(); // Click on the first channel
        unsubscribeChannel.clickSubscribedButton(); // Click the "Subscribed" button
        unsubscribeChannel.clickUnsubscribeButton(); // Click the "Unsubscribe" button
        unsubscribeChannel.verifyUnsubscribed(); // Verify that the "Subscribe" button is now visible
    })
    it('should autoplay the next video after the current video finishes', () => {
        const videoQuery = 'Cypress tutorial'; // Replace with any video query

        videoAutoplay.visit(); // Visit YouTube
        videoAutoplay.search(videoQuery); // Search for the video
        videoAutoplay.clickFirstVideo(); // Click the first video
        videoAutoplay.verifyAutoplay(); // Verify that the video autoplays
    })
    it('should change video quality and verify it', () => {
        const videoQuery = 'Cypress tutorial'; // Replace with any video query

        videoQuality.visit(); // Visit YouTube
        videoQuality.search(videoQuery); // Search for the video
        videoQuality.clickFirstVideo(); // Click the first video
        videoQuality.openQualityMenu(); // Open the quality settings
        videoQuality.selectQuality('1080p'); // Select 1080p quality
        videoQuality.verifyQualitySelected('1080p'); // Verify that 1080p is selected
    })
    it('should play video smoothly on a slow network', () => {  //BUG
        videoPlaybackSlowNetwork.visit(); // Visit YouTube
        videoPlaybackSlowNetwork.search('Cypress tutorial'); // Search for a video
        videoPlaybackSlowNetwork.clickFirstVideo(); // Click on the first video
        videoPlaybackSlowNetwork.simulateSlowNetwork(); // Simulate slow network (3G)
        videoPlaybackSlowNetwork.verifyVideoPlaying(); // Verify the video is playing
    })
    it('should allow editing a comment', () => {
        const username = 'your_email@gmail.com'; // Replace with your username
        const password = 'your_password'; // Replace with your password
        const comment = 'This is a test comment'; // Original comment
        const updatedComment = 'This is an updated comment'; // Edited comment

        commentEdit.visit(); // Visit YouTube
        commentEdit.login(username, password); // Log in
        commentEdit.searchAndSelectVideo('Cypress tutorial'); // Search for video
        commentEdit.postComment(comment); // Post a comment
        commentEdit.editComment(updatedComment); // Edit the comment
        commentEdit.verifyComment(updatedComment); // Verify the comment is updated
    });
    it('should allow editing a comment', () => {
        const username = 'shaiktanzeelas@gmail.com'; 
        const password = 'Tanzeela123$'; 
        const comment = 'This is a test comment'; 
        const updatedComment = 'This is an updated comment'; // Edited comment

        commentEdit.visit(); // Visit YouTube
        commentEdit.login(username, password); // Log in
        commentEdit.searchAndSelectVideo('Cypress tutorial'); // Search for video
        commentEdit.postComment(comment); // Post a comment
        commentEdit.editComment(updatedComment); // Edit the comment
        commentEdit.verifyComment(updatedComment); // Verify the comment is updated
    });
   
    it('should add a video to the Watch Later list', () => {
        watchLater.visit(); // Visit YouTube homepage
        watchLater.searchAndSelectVideo('Cypress tutorial'); // Search and select a video
        watchLater.addToWatchLater(); // Add video to "Watch Later"
        watchLater.verifyVideoAddedToWatchLater(); // Verify the video is added to the "Watch Later" list
    });
    it('should remove a video from the Watch Later list', () => {
        watchLaterRemove.visit(); // Visit YouTube homepage
        watchLaterRemove.searchAndSelectVideo('Cypress tutorial'); // Search and select a video
        watchLaterRemove.addToWatchLater(); // Add the video to "Watch Later"
        watchLaterRemove.goToWatchLater(); // Go to "Watch Later" playlist
        watchLaterRemove.removeFromWatchLater(); // Remove the video from "Watch Later"
        watchLaterRemove.verifyVideoRemoved(); // Verify the video is removed
    })

    it('should change the language to Spanish', () => {
        language.visit(); // Visit YouTube homepage
        language.openLanguageMenu(); // Open language settings
        language.changeLanguageTo('Español'); // Change to Spanish
        language.verifyLanguageChanged('Español'); // Verify the UI changes to Spanish
    });

    it('should change the language to French', () => {
        language.visit(); // Visit YouTube homepage
        language.openLanguageMenu(); // Open language settings
        language.changeLanguageTo('Français'); // Change to French
        language.verifyLanguageChanged('Français'); // Verify the UI changes to French
    })


});