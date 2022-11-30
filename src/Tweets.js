import './Tweets.css';

function Tweets(props) {
  const handleCommentClick = function(id) {
   props.handleCommentClick(id);
  }

  const optionsClick = function(id) {
    props.optionsClick(id);
  }

  // const makeTweets = function() {
  //   let storedData = localStorage.getItem("accounts");
  //   storedData = JSON.parse(storedData);

  //   const tweets = [];
  //   const data = props.tweets;
  //   if (data !== undefined) { 
  //     for (let i = data.length - 1; i > -1; i--) {

  //       const tweet = <div id = 'tweet'>
  //                       <div id = 'tweetImageAndText'>
  //                         <img id = 'tweetImage' src = {require('./account.png')}/>
  //                         <p id = 'userName'>{data[i]['userName']}</p>
  //                       </div>
  //                       <p id = 'tweetText'>{data[i]['tweet']}</p>
  //                       <img 
  //                         id = 'commentBubble' 
  //                         src = {require('./comment.png')}
  //                         onClick = {() => handleCommentClick(data[i]['id'])}
  //                       />
  //                       <img 
  //                         id = 'deleteButton' 
  //                         src = {require('./x.png')}
  //                         onClick = {() => optionsClick(data[i]['id'])}
  //                       />
  //                     </div>;
  //       tweets.push(tweet);


  //     }
  //   } 
  //   return tweets;
  // }

  const makeTweets = function() {
    let storedData = localStorage.getItem("accounts");
    storedData = JSON.parse(storedData);

    const tweets = [];
    const data = props.tweets;
    if (data !== undefined) { 
      for (let i = data.length - 1; i > -1; i--) {
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
          }
        }
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
