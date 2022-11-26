import './Scroll.css';
import Tweets from './Tweets';

function Scroll(props) {
  return ( 
    <div className="Scroll">
      {
        <div id = 'tweetsContainer'>
          <Tweets
            tweet = {props.tweet}
            tweets = {props.tweets}
            handleCommentClick = {props.handleCommentClick}
          /> 
        </div>
      }
    </div>
  );
}

export default Scroll;
 