import './Thread.css';
import Comments from './Comments';
import {useState, useEffect} from 'react';

function Thread(props) {
  let [comments, setComments] = useState(undefined);

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
    }
  }

  useEffect(() => {
    setComments(tweet['comments']);
  }, []);

  return (
    <div className="Thread">
      <Comments
        comments = {comments}
      />
    </div>
  );
}

export default Thread;
