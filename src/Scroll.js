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
            optionsClick = {props.optionsClick}
          /> 
        </div>
      }
    </div>
  );
}

export default Scroll;
 