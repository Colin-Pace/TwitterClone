import './Profile.css';
import UserTweets from './UserTweets';

function Profile(props) { 
  return (
    <div className="Profile">
      <img id = 'profileImage' src = {require('./account.png')}/>
      <p id = 'profileName'>{props.userName}</p>
      <UserTweets
        userName = {props.userName}
        handleCommentClick = {props.handleCommentClick}
      />
    </div>
  );
}

export default Profile;
