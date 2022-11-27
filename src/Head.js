import './Head.css';

function Head(props) {
  const handleGoBackClick = function() {
    handleGoBackClick = props.handleGoBackClick();
  }

  return (
    <div className="Head">
      <div id = 'goBackAndTitle'>
        <img 
          id = 'goBack' 
          src = {require('./goBack.png')}
          onClick = {handleGoBackClick}
        />
        <p>Thread</p>
      </div> 
      <div id = 'headPicAndAuthor'>
        <img id = 'headPic' src = {require('./account.png')}/>
        <p>{props.author}</p>
      </div>
      <p id = 'headTweet'>{props.tweet}</p>
    </div>
  );
}

export default Head;
 