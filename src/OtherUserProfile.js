import './OtherUserProfile.css';
import OtherUserTweets from './OtherUserTweets';
import {useState, useEffect} from 'react';

function OtherUserProfile(props) { 
  let [following, setFollowing] = useState(false);

  const followButton = function() {
    setFollowing(true);
    let storedData = localStorage.getItem("accounts");
    storedData = JSON.parse(storedData);
 
    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i]['name'] === props.userName) {
        storedData[i]['following'].push(props.otherUserName);
      }
    }

    localStorage.setItem("accounts", JSON.stringify(storedData));
  }

  const followingButton = function() {
    setFollowing(false);
    let storedData = localStorage.getItem("accounts");
    storedData = JSON.parse(storedData);
    let result = [];
 
    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i]['name'] === props.userName) {
        for (let j = 0; j < storedData[i]['following'].length; j++) {
          if (storedData[i]['following'][j] !== props.otherUserName) {
            result.push(storedData[i]['following'][j]);
          }
        }
        storedData[i]['following'] = result;
      }
    }

    localStorage.setItem("accounts", JSON.stringify(storedData));
  }

  useEffect(() => {
    setFollowing(false);

    let storedData = localStorage.getItem("accounts");
    storedData = JSON.parse(storedData);
    for (let i = 0; i < storedData.length; i++) {
      if (props.userName === storedData[i]['name']) {
        for (let j = 0; j < storedData[i]['following'].length; j++) {
          if (storedData[i]['following'][j] === props.otherUserName) {
            setFollowing(true);
          }
        }
      }
    }
  });

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
