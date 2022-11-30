import './App.css';
import SidebarLeft from './SidebarLeft';
import Center from './Center';
import SidebarRight from './SidebarRight';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {useState, useEffect} from 'react';
import LogIn from './LogIn';
import Register from './Register';

function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  let [id, setId] = useState(0);
  let [userName, setUserName] = useState(undefined);
  let [tabsDisplay, setTabsDisplay] = useState('home');
  let [otherUserName, setOtherUserName] = useState(undefined);

  const logInFormSubmit = function(userNameAndPassword) {
    let storedData = localStorage.getItem("accounts");
    if (storedData.length === null || storedData === 0) {
      localStorage.setItem("accounts", JSON.stringify([]));
    } else { 
      storedData = JSON.parse(storedData);
    }
    
    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i]['name'] === userNameAndPassword[0] &&
          storedData[i]['password'] === userNameAndPassword[1]) {
            setUserName(userNameAndPassword[0]);
            setLoggedIn(true);
      }
    }
  }

  const registerFormSubmit = function(userNameAndPassword) {
    let storedData = localStorage.getItem("accounts");
    if (storedData.length === null || storedData === 0) {
      localStorage.setItem("accounts", JSON.stringify([]));
    } else {
      storedData = JSON.parse(storedData);
      let largest = 0;
      storedData.forEach((entry) => {
        if (entry["id"] > largest) {
          largest = entry["id"];
        }
      });
      setId(largest + 1);
    }

    const newEntry = {
      "id": id,
      "name": userNameAndPassword[0],
      "password": userNameAndPassword[1],
      "following": [userNameAndPassword[0]]
    };

    storedData.push(newEntry);
    localStorage.setItem("accounts", JSON.stringify(storedData));
  }

  const logOutClick = function() {
    setLoggedIn(false);
  }

  const handleHomeClick = function() {
    setTabsDisplay('home');
  }

  const handleProfileClick = function() {
    setTabsDisplay('profile');
  }

  const handleSearchName = function(name) {
    setTabsDisplay('otherUserProfile');
    setOtherUserName(name);
  }

  useEffect(() => {
    let storedData = localStorage.getItem("accounts");
    if (storedData === undefined || storedData === null) {
      localStorage.setItem("accounts", JSON.stringify([]));
    }
  }, []);

  if (loggedIn === true) { 
    return (
      <div className="App">
        <SidebarLeft 
          userName = {userName} 
          logOutClick = {logOutClick}
          handleHomeClick = {handleHomeClick}
          handleProfileClick = {handleProfileClick}
        />
        <Center
          userName = {userName} 
          tabsDisplay = {tabsDisplay}
          otherUserName = {otherUserName}
        />
        <SidebarRight
          handleSearchName = {handleSearchName}
        />      
      </div>
    ); 
  } else {
    return (
      <div>
        <Router>
          <Routes>
            <Route path = '/' element = {<LogIn
              logInFormSubmit = {logInFormSubmit}  
            />}/>
            <Route path = '/register' element = {<Register
              registerFormSubmit = {registerFormSubmit}
            />}/>
          </Routes>
        </Router>
      </div>
    )
  }
  
}

export default App;
