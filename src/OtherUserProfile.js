import './OtherUserProfile.css';
import OtherUserTweets from './OtherUserTweets';
import {useState} from 'react';

function OtherUserProfile(props) { 
  let [following, setFollowing] = useState(false);

  const followButton = function() {
    setFollowing(true);
    let storedData = localStorage.getItem("accounts");
    storedData = JSON.parse(storedData);

    let account = undefined;
    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i]['name'] === props.userName) {
        storedData[i]['following'].push(props.otherUserName);
      }
    }

    localStorage.setItem("accounts", JSON.stringify(storedData));
  }

  const followingButton = function() {
    setFollowing(false);
  }

  return (
    <div className="OtherUserProfile">
      <img id = 'otherUserProfileImage' src = {require('./account.png')}/>
      <p id = 'otherUserProfileName'>{props.otherUserName}</p>
      { following === false ?
        <button 
          id = 'followButton'
          onClick = {followButton}
        >Follow</button>
        :
        <button 
          id = 'followingButton'
          onClick = {followingButton} 
        >Following</button>
      }

      <OtherUserTweets
        otherUserName = {props.otherUserName}
        handleCommentClick = {props.handleCommentClick}
      />
    </div> 
  );
}

export default OtherUserProfile;
