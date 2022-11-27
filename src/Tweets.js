import './Tweets.css';
import {useState, useEffect} from 'react';

function Tweets(props) {
  const handleCommentClick = function(id) {
   props.handleCommentClick(id);
  }

  const optionsClicked = function() {
    
  }

  const makeTweets = function() {
    const tweets = [];
    const data = props.tweets;
    if (data !== undefined) {
      for (let i = data.length - 1; i > -1; i--) {
        const tweet = <div id = 'tweet'>
                        <div id = 'tweetImageAndText'>
                          <img id = 'tweetImage' src = {require('./account.png')}/>
                          <p id = 'tweetText'>{data[i]['tweet']}</p>
                        </div>
                        <img 
                          id = 'commentBubble' 
                          src = {require('./comment.png')}
                          onClick = {() => handleCommentClick(data[i]['id'])}
                        />
                        <img 
                          id = 'tweetThreeDots' 
                          src = {require('./threeDots.png')}
                          onClick = {optionsClicked}
                        />
                      </div>;
        tweets.push(tweet);
      }
    }
    return tweets;
  }
  
  const tweets = makeTweets();
  return (
    <div className="Tweets">
      {tweets}
    </div>
  );
} 

export default Tweets;
