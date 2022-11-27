import './Comment.css';
import {useState, useEffect} from 'react';
import Head from './Head';
import Reply from './Reply';
import Thread from './Thread';

function Comment(props) {
  let [tweet, setTweet] = useState(undefined);
  let [thread, setThread] = useState(undefined);

  const setUpPage = function() {
    let storedData = localStorage.getItem("tweets");
    storedData = JSON.parse(storedData);
    let tweetText = undefined;
    let comments = undefined
    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i]['id'] === props.editId) {
        tweetText = storedData[i]['tweet'];
        comments = storedData[i]['comments'];
      }
    }
    setTweet(tweetText);
    setThread(comments);
  }

  useEffect(() => { 
    setUpPage(); 
  }, []);

  return (
    <div className="Comment">
      <Head 
        tweet = {tweet}
      />
      <Reply />
      <Thread 
        thread = {thread}
      />
    </div>
  );
}

export default Comment;
