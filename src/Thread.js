import './Thread.css';
import Comments from './Comments';

function Thread(props) {
  const deleteCommentClick = function(id, tweetId) {
    let storedData = localStorage.getItem("tweets");
    storedData = JSON.parse(storedData);
    let result = [];
    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i]['id'] === tweetId) {
        for (let j = 0; j < storedData[i]['comments'].length; j++) {
          if (storedData[i]['comments'][j]['id'] !== id) {
            result.push(storedData[i]['comments'][j]);
          }
        }
      }
      if (i === storedData.length - 1) {
        storedData[i]['comments'] = result;
      }
    }
    localStorage.setItem("tweets", JSON.stringify(storedData));
    props.populateComments();
  }

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
        deleteCommentClick = {deleteCommentClick}
        editId = {props.editId}
      />
    </div>
  );
}

export default Thread;
