import './SidebarRight.css';
import WhatsHappening from './WhatsHappening';
import {useState} from 'react';

function SidebarRight(props) {
  let [searchName, setSearchName] = useState(undefined);

  const sendMessage = function() {
    let search = searchName.trim();
    setSearchName("");

    let storedData = localStorage.getItem("accounts");
    storedData = JSON.parse(storedData);
    let userFound = false;
    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i]['name'] === search) {
        userFound = true;
      }
    }

    if (userFound === true) {
      props.handleSearchName(search);
    }
  };

  return (
    <div className="SidebarRight">
      <input 
        id = 'searchTwitter' 
        type = 'text' 
        value = {searchName}
        placeholder = 'Search Twitter'
        autocomplete = 'off'
        onChange={(event) => setSearchName(event.target.value)}
        onKeyPress = {(event) => {
          event.key === "Enter" && sendMessage();}}
      ></input>
      
      <WhatsHappening />
    
      <div id = 'whoToFollow'> 
        <p id = 'wTFTitle'>Who to follow</p>
      </div>
    </div> 
  );
}

export default SidebarRight;
