import './Center.css';
import Home from './Home';
import Scroll from './Scroll';
import {useState, useEffect} from 'react';
import Comment from './Comment';

function Center(props) {
  let [tweet, setTweet] = useState(undefined);
  let [homeAndScroll, setHomeAndScroll] = useState(true);
  let [tweets, setTweets] = useState(undefined);
  let [id, setID] = useState(0);
  let [editId, setEditId] = useState(undefined);

  const getTweet = function(tweet) {
    setTweet(tweet); 
  }

  const handleCommentClick = function(id) {
    setEditId(id);
    setHomeAndScroll(false);
  }

  const populateTweets = function() { 
    let storedData = localStorage.getItem("tweets");
    if (storedData.length === null || storedData === 0) {
      localStorage.setItem("tweets", JSON.stringify([]));
    } else {
      storedData = JSON.parse(storedData);
      let largest = 0;
      storedData.forEach((entry) => {
        if (entry["id"] > largest) {
          largest = entry["id"];
        }
      });
      setID(largest + 1);
    }
    setTweets(storedData);
  }; 

  useEffect(() => {
    let storedData = localStorage.getItem("tweets");
    if (storedData === undefined || storedData === null) {
      localStorage.setItem("tweets", JSON.stringify([]));
    }

    populateTweets();
  }, []);

  return (
    <div className = "Center">
      {
        homeAndScroll === true ?
          <div>
            <Home
              getTweet = {getTweet}
              id = {id}
              populateTweets = {populateTweets}
              userName = {props.userName}
            />
            <Scroll
              tweet = {tweet}
              tweets = {tweets}
              handleCommentClick = {handleCommentClick}
            />
          </div>
        :
          <div>
            <Comment
              editId = {editId}
            />
          </div>
      }
    </div>
  );
}

export default Center;
