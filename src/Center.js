import './Center.css';
import Home from './Home';
import Scroll from './Scroll';
import {useState} from 'react';

function Center() {
  let [tweet, setTweet] = useState(undefined);

  const getTweet = function(tweet) {
    setTweet(tweet);
  }

  return (
    <div className="Center">
      <Home
        getTweet = {getTweet}
      />
      <Scroll
        tweet = {tweet}
      />
    </div>
  );
}

export default Center;
