import './Center.css';
import Home from './Home';
import Scroll from './Scroll';
import {useState} from 'react';
import Comment from './Comment';

function Center() {
  let [tweet, setTweet] = useState(undefined);
  let [homeAndScroll, setHomeAndScroll] = useState(true);

  const getTweet = function(tweet) {
    setTweet(tweet);
  }

  return (
    <div className = "Center">
      {
        homeAndScroll === true ?
          <div>
            <Home
              getTweet = {getTweet}
            />
            <Scroll
              tweet = {tweet}
            />
          </div>
        :
          <div>
            <Comment/>
          </div>
      }
    </div>
  );
}

export default Center;
