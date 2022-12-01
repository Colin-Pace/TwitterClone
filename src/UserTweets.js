import './UserTweets.css';

function UserTweets(props) {
  const handleCommentClick = function(id) {
    props.handleCommentClick(id)
    //console.log(id);
  }

  const deleteClick = function() {

  }

  const makeUserTweets = function() {
    let storedData = localStorage.getItem("tweets");
    storedData = JSON.parse(storedData);

    let tweets = []; 
    let tweetCount = 0;
    for (let i = storedData.length - 1; i > -1; i--) {
      let tweetCount = 0;
        for (let l = 0; l < storedData[i]['comments'].length; l++) {      // one step behind
          tweetCount++;
        }
      if (props.userName === storedData[i]['userName']) {
        const data = storedData[i];
        const tweet = <div id = 'tweet'>
                      <div id = 'userTweetImgAndTitle'>
                        <img id = 'userTweetImg' src = {require('./account.png')}/>
                        <p id = 'userTweetName'>{props.userName}</p>
                      </div>
                      <p id = 'userTweetText'>{data['tweet']}</p>
                      <div id = 'tweetImgAndNumber'>
                        <img 
                          id = 'commentBubble' 
                          src = {require('./comment.png')}
                          onClick = {() => handleCommentClick(data[i]['id'])}
                        />
                        <p id = 'tweetCount'>{tweetCount}</p>
                        <img 
                          id = 'userTweetsDeleteButton' 
                          src = {require('./x.png')}
                          onClick = {() => deleteClick(data[i]['id'])}
                        />
                      </div>
                    </div>
        tweets.push(tweet); 
      }
    }

    return tweets;
  }

  const usertweets = makeUserTweets();
  return (
    <div className="UserTweets">
      <p id = 'userTweetTitle'>User tweets</p>
      {usertweets}
    </div>
  );
}

export default UserTweets;
