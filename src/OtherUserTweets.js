import './OtherUserTweets.css';

function OtherUserTweets(props) {
  const handleCommentClick = function(id) {
    props.handleCommentClick(id)
  }

  const makeOtherUserTweets = function() {
    let storedData = localStorage.getItem("tweets");
    storedData = JSON.parse(storedData);

    let tweets = [];
    for (let i = storedData.length - 1; i > -1; i--) {
      let tweetCount = 0;
      for (let l = 0; l < storedData[i]['comments'].length; l++) {
        tweetCount++;
      } 
      if (props.otherUserName === storedData[i]['userName']) {
        const data = storedData[i];
        const tweet = <div id = 'tweet'>
                      <div id = 'userTweetImgAndTitle'>
                        <img id = 'userTweetImg' src = {require('./account.png')}/>
                        <p id = 'userTweetName'>{props.otherUserName}</p>
                      </div>
                      <p id = 'userTweetText'>{data['tweet']}</p>
                      <div id = 'otherUserTweetImgAndNumber'>
                        <img 
                          id = 'otherUserTweetCommentBubble' 
                          src = {require('./comment.png')}
                          onClick = {() => handleCommentClick(data['id'])}
                        />
                        <p id = 'tweetCount'>{tweetCount}</p>
                      </div>
                    </div>
        tweets.push(tweet); 
      }
    }

    return tweets;
  }
  
  const otherUsertweets = makeOtherUserTweets();
  return (
    <div className="OtherUserTweets">
      <p id = 'OtherUserTweetTitle'>User tweets</p>
      {otherUsertweets}
    </div>
  );
}

export default OtherUserTweets;
