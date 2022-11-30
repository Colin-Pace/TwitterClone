import './UserTweets.css';

function UserTweets(props) {
  const handleCommentClick = function(id) {
    props.handleCommentClick(id)
    //console.log(id);
  }

  const makeUserTweets = function() {
    let storedData = localStorage.getItem("tweets");
    storedData = JSON.parse(storedData);

    let tweets = []; 
    for (let i = storedData.length - 1; i > -1; i--) {
      if (props.userName === storedData[i]['userName']) {
        const data = storedData[i];
        const tweet = <div id = 'tweet'>
                      <div id = 'userTweetImgAndTitle'>
                        <img id = 'userTweetImg' src = {require('./account.png')}/>
                        <p id = 'userTweetName'>{props.userName}</p>
                      </div>
                      <p id = 'userTweetText'>{data['tweet']}</p>
                      <img 
                        id = 'userTweetCommentBubble' 
                        src = {require('./comment.png')}
                        onClick = {() => handleCommentClick(data['id'])}
                      />
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
