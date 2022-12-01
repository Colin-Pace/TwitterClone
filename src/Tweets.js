import './Tweets.css';
import {useEffect} from 'react';

function Tweets(props) {
  const handleCommentClick = function(id) {
   props.handleCommentClick(id);
  }

  const optionsClick = function(id) {
    props.optionsClick(id);
  }

  const makeTweets = function() {

    let storedData = localStorage.getItem("accounts");
    storedData = JSON.parse(storedData);

    const tweets = [];
    const data = props.tweets;
    if (data !== undefined) { 

      let tweetCount = 0;
      for (let i = data.length - 1; i > -1; i--) {
        let tweetCount = 0;
        for (let l = 0; l < data[i]['comments'].length; l++) {      // one step behind
          tweetCount++;
        }

        for (let j = 0; j < storedData.length; j++) {
          if (storedData[j]['name'] === props.userName) {
            for (let k = 0; k < storedData[j]['following'].length; k++) {   
              if (storedData[j]['following'][k] === data[i]['userName']) {                

                const tweet = <div id = 'tweet'>
                                <div id = 'tweetImageAndText'>
                                  <img id = 'tweetImage' src = {require('./account.png')}/>
                                  <p id = 'userName'>{data[i]['userName']}</p>
                                </div>
                                <p id = 'tweetText'>{data[i]['tweet']}</p>
                                <div id = 'tweetImgAndNumber'>
                                  <img 
                                    id = 'commentBubble' 
                                    src = {require('./comment.png')}
                                    onClick = {() => handleCommentClick(data[i]['id'])}
                                  />
                                  <p id = 'tweetCount'>{tweetCount}</p>
                                </div>
                                <img 
                                  id = 'deleteButton' 
                                  src = {require('./x.png')}
                                  onClick = {() => optionsClick(data[i]['id'])}
                                />
                              </div>
                tweets.push(tweet);
 
              }
            } 
          }
        }
      }
    } 
    return tweets;
  }
  
  const tweets = makeTweets();
  useEffect(() => {
    makeTweets();
  });

  return (
    <div className="Tweets">
      {tweets}
    </div>
  );
} 

export default Tweets;
