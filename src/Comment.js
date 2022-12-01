import './Comment.css';
import {useState, useEffect} from 'react';
import Head from './Head';
import Reply from './Reply';
import Thread from './Thread';

function Comment(props) {
  let [author, setAuthor] = useState(undefined);
  let [tweet, setTweet] = useState(undefined);
  let [thread, setThread] = useState(undefined);
  
  const setUpPage = function() {
    let storedData = localStorage.getItem("tweets");
    storedData = JSON.parse(storedData);

    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i]['id'] === props.editId) {
        setTweet(storedData[i]['tweet']);
        setThread(storedData[i]['comments']);
        setAuthor(storedData[i]['userName']);
      }
    }
  }

  const populateComments = function() {
    setUpPage();
  }

  useEffect(() => { 
    setUpPage(); 
  }, []);

  return ( 
    <div className="Comment">
      <Head  
        tweet = {tweet}
        author = {author}
        handleGoBackClick = {props.handleGoBackClick}
      />
      <Reply 
        editId = {props.editId}
        userName = {props.userName}
        populateComments = {populateComments}
      />
      <Thread 
        thread = {thread}
        editId = {props.editId}
        populateComments = {populateComments}
      />
    </div>
  );
}

export default Comment;
