import './LogIn.css';
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';

function LogIn(props) {
  let [userName, setUserName] = useState('');
  let [password, setPassword] = useState('');
  let [messages, setMessages] = useState('');

  const handleNameChange = event => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const formSubmit = function(e) {
    e.preventDefault();
    const userNameAndPassword = [];
    userNameAndPassword.push(userName.trim(), password.trim());
    props.logInFormSubmit(userNameAndPassword);
  }

  const handleToRegisterPage = function() {
    props.toRegisterPage();
  }

  useEffect(() => {
    if (props.incorrectPassword === true) {
      setMessages('Incorrect password');
    } else {
      setMessages('')
    }

  }, [props.incorrectPassword])

  return (
    <div className="LogIn">
    
      <img id = 'logInBird' src = {require('./bird.png')}/>

      <div id = 'card'>
        <h1>Sign into Twitter</h1>

        <form onSubmit = {formSubmit}>
          <input 
            type="text" 
            id="logInUname" 
            name="uname"
            placeholder = 'User name'
            maxlength="10"
            autocomplete = 'off'
            onChange={handleNameChange}
          /><br/>
          <input 
            type="text" 
            id="logInPword" 
            name="pword"
            placeholder = 'Password'
            maxlength="10"
            autocomplete = 'off'
            onChange={handlePasswordChange}
          /><br/><br/>
          <input 
            id = 'logInButton' 
            type="submit" 
            value="Login"
          />
        </form> 

        <Link 
          to = "/register"
          id = 'registerLink' 
          onClick = {handleToRegisterPage}
        >Register</Link>

      </div>

      <div id = 'loginMessages'>
        { messages }
      </div>

    </div>
  );
}

export default LogIn;
