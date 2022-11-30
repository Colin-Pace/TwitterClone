import './Center.css';
import Home from './Home';
import Scroll from './Scroll';
import {useState, useEffect} from 'react';
import Comment from './Comment';
import Profile from './Profile';

function Center(props) {
  let [tweet, setTweet] = useState(undefined);
  let [display, setDisplay] = useState('home');
  let [tweets, setTweets] = useState(undefined);
  let [id, setID] = useState(0);
  let [editId, setEditId] = useState(undefined);

  const getTweet = function(tweet) {
    setTweet(tweet); 
  }

  const handleCommentClick = function(id) {
    setEditId(id);
    setDisplay('comment');
  }

  const handleOptionsClick = function(id) {
    let storedData = localStorage.getItem("tweets");
    let result = [];
    if (storedData.length === null || storedData === 0) {
      localStorage.setItem("tweets", JSON.stringify([]));
    } else {
      storedData = JSON.parse(storedData);
      for (let i = 0; i < storedData.length; i++) {
        if (storedData[i]['id'] === id) {
          continue;
        } else {
          result.push(storedData[i]);
        }
      }
    }
    localStorage.setItem("tweets", JSON.stringify(result));
    populateTweets();
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

  const handleGoBackClick = function() {
    setDisplay('home');
  }

  useEffect(() => {
    let storedData = localStorage.getItem("tweets");
    if (storedData === undefined || storedData === null) {
      localStorage.setItem("tweets", JSON.stringify([]));
    }

    setDisplay(props.tabsDisplay);

    populateTweets();
  }, [props.tabsDisplay, ]);

  return (
    <div className = "Center">
      {
        display === 'home' ?
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
              optionsClick = {handleOptionsClick}
            />
          </div>
        : display === 'comment' ?
          <div>
            <Comment
              editId = {editId}
              handleGoBackClick = {handleGoBackClick}
              userName = {props.userName}
            />
          </div>
          :
          <div>
            <Profile
              userName = {props.userName}
            />
          </div>
      }
    </div>
  );
}

export default Center;
