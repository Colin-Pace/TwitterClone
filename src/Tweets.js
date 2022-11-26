import './Tweets.css';
import {useState, useEffect} from 'react';

function Tweets(props) {
  let [tweets, setTweets] = useState(undefined);

  const makeTweets = function() {
    const data = props.data;
    for (let i = 0; i < data.length; i++) {
      const tweet = <div>
                      <img src = {require('./account.png')}/>
                      <p>{props.para}</p>
                    </div>;
    setTweets([...tweet]);
    }
  }
  
  useEffect(() => {
    //console.log(props.tweet);
  });

  return (
    <div className="Tweets">
      {tweets}
    </div>
  );
}

export default Tweets;
