import './OtherUserProfile.css';
import OtherUserTweets from './UserTweets';

function OtherUserProfile(props) { 
  return (
    <div className="Profile">
      <img id = 'profileImage' src = {require('./account.png')}/>
      <p id = 'profileName'>{props.otherUserName}</p>
      {/* <OtherUserTweets
        userName = {props.userName}
        handleCommentClick = {props.handleCommentClick}
      /> */}
    </div>
  );
}

export default OtherUserProfile;
