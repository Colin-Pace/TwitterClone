import './Tweets.css';

function Tweets(props) {
  const handleCommentClick = function(id) {
   props.handleCommentClick(id);
  }

  const optionsClick = function(id) {
    props.optionsClick(id);
  }

  const makeTweets = function() {
    const tweets = [];
    const data = props.tweets;
    if (data !== undefined) { 
      for (let i = data.length - 1; i > -1; i--) {
        const tweet = <div id = 'tweet'>
                        <div id = 'tweetImageAndText'>
                          <img id = 'tweetImage' src = {require('./account.png')}/>
                          <p id = 'userName'>{data[i]['userName']}</p>
                        </div>
                        <p id = 'tweetText'>{data[i]['tweet']}</p>
                        <img 
                          id = 'commentBubble' 
                          src = {require('./comment.png')}
                          onClick = {() => handleCommentClick(data[i]['id'])}
                        />
                        <img 
                          id = 'deleteButton' 
                          src = {require('./x.png')}
                          onClick = {() => optionsClick(data[i]['id'])}
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
