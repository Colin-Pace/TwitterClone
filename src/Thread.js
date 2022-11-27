import './Thread.css';
import Comments from './Comments';

function Thread(props) {
  const makeComments = function() {
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

    return tweet['comments'];
  }

  const comments = makeComments();
  return (
    <div className="Thread">
      <Comments
        comments = {comments}
      />
    </div>
  );
}

export default Thread;
