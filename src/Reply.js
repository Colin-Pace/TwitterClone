import './Reply.css';
import {useState} from 'react';

function Reply(props) {
  let [reply, setReply] = useState('');
  let [id, setId] = useState(0);
  let [commentCount, setCommentCount] = useState(0);

  const handleChange = event => {
    setReply(event.target.value);
  };

  const handleClick = function(e) {
    e.preventDefault();

    let storedData = localStorage.getItem("tweets");
    if (storedData.length === null || storedData === 0) {
      localStorage.setItem("tweets", JSON.stringify([]));
    } else {
      storedData = JSON.parse(storedData);
    }
    
    let tweet = undefined;
    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i]['id'] === props.editId) {
        tweet = storedData[i]; 

        const newComment = {
          "id": id, 
          'userName': props.userName,
          "comment": reply,
        };

        let largest = 0;
        for (let j = 0; j < tweet['comments'].length; j++) {
          if (tweet['comments'][j]['id'] > largest) {
            largest = tweet['comments'][j]['id'];
          }
        }

        setId(largest + 1);

        

        tweet['comments'].push(newComment);
        //setCommentCount(tweet['comments'].length);
        //console.log(newComment);
      }
    }

    setReply(""); 
    localStorage.setItem("tweets", JSON.stringify(storedData));
    props.populateComments();
  };

  return (
    <div className="Reply">
      <div id = "imgAndArea">
        <img id = 'accountPic' src = {require('./account.png')}/>
        <textarea 
          id = 'tweetInput'
          placeholder = "Tweet your reply"
          onChange={handleChange}
          value={reply}
          autoComplete="off"
          rows = "6"
          cols = "30"
          maxlength = "280"
        />
      </div>
      <button 
        id = 'homeTweetButton'
        onClick={handleClick}
        >Reply</button>
    </div>
  );
}

export default Reply;
