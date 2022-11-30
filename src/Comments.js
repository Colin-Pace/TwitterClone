import './Comments.css';

function Comments(props) {
  const optionsClick = function(id) {
    props.optionsClick(id);
  }

  const makeComments = function() {
    const result = [];
    const data = props.comments;
    if (data != undefined) {
      for (let i = data.length - 1; i > -1; i--) { 
        const comment = <div id = 'comment'>
                          <div id = "commentImgAndAuthor">
                            <img 
                              id = "commentAccountImg" 
                              src = {require('./account.png')}
                            />
                            <p>{data[i]['userName']}</p>
                          </div>
                          <p id = 'commentText'>{data[i]['comment']}</p>
                          <img 
                            id = 'commentDeleteButton' 
                            src = {require('./x.png')}
                            onClick = {() => optionsClick(data[i]['id'])}
                          />
                        </div> 
        result.push(comment);
      }
    }
    return result;
  }

  const comments = makeComments();
  return (
    <div className="Comments">
      {comments}
    </div>
  );
}

export default Comments;
