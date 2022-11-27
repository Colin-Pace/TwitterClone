import './Reply.css';
import {useState} from 'react';

function Reply(props) {
  const [reply, setReply] = useState('');
  let [id, setID] = useState(0);

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

        for (let j = 0; j < tweet['comments'].length; j++) {
          let largest = 0;  
          if (tweet['comments']["id"] > largest) {
            largest = tweet['comments']["id"];
          }
          setID(largest + 1); // not working
        }
        
        const newComment = {
          "id": id,
          'userName': props.userName,
          "comment": reply,
        };

        tweet['comments'].push(newComment);

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
