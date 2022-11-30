import { Link } from "react-router-dom";
import './Register.css';
import {useState, useEffect} from 'react';

function generatePassword() {
  const charsOne = "abcdefghijklmnopqrstuvwxyz"
  const charsTwo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const specialCharacters = "[!@#$%^&*()_+-={};:|,.<>\/?~]`'";
  
  let answer = "";
  for (let i = 0; i < 2; i++) {
    answer += charsOne.charAt(Math.floor(Math.random() * 26));
    answer += charsTwo.charAt(Math.floor(Math.random() * 26));
  }
  for (let i = 0; i < 1; i++) {
    answer += numbers.charAt(Math.floor(Math.random() * 10));
    answer += specialCharacters.charAt(Math.floor(Math.random() * 31));
  }

  const shuffledAnswer = answer.split('').sort(function(){return 0.5-Math.random()}).join('');
  return shuffledAnswer;
}

function isAtLeastSixCharactersLong(s) {
  return s.length >= 6;
}

function hasUpperCase(s) {
  let hasUpperCase = false;
  for (let i = 0; i < s.length; i++) {
    if (/^[A-Z]*$/.test(s[i]) === true) {
      hasUpperCase = true;
    } else {
      continue;
    }
  }

  return hasUpperCase;
}


function hasLowerCase(s) {
  let hasLowerCase = false;
  for (let i = 0; i < s.length; i++) {
    if (/^[a-z]*$/.test(s[i]) === true) {
      hasLowerCase = true;
    } else {
      continue;
    }
  }

  return hasLowerCase;
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

function hasSpecialCharacter(s) {
  return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(s)
}

function isValidPassword(s) {
  let isAtLeastSixCharactersLongBool = false;
  let hasUpperCaseBool = false;
  let hasLowerCaseBool = false;
  let hasNumberBool = false;
  let hasSpecialCharacterBool = false;
  let remaining = [];

  if (isAtLeastSixCharactersLong(s) === true) {
    isAtLeastSixCharactersLongBool = true;
  } else {
    remaining.push("At least 6 characters");
  }

  if (hasUpperCase(s) === true) {
    hasUpperCaseBool = true;
  } else {
    remaining.push("Upper case");
  }

  if (hasLowerCase(s) === true) {
    hasLowerCaseBool = true;
  } else {
    remaining.push("Lower case");
  }

  if (hasNumber(s) === true) {
    hasNumberBool = true;
  } else {
    remaining.push("Number");
  }

  if (hasSpecialCharacter(s) === true) {
    hasSpecialCharacterBool = true;
  } else {
    remaining.push("Special character");
  }

  if (isAtLeastSixCharactersLongBool === true &&
      hasUpperCaseBool === true &&
      hasLowerCaseBool === true &&
      hasNumberBool === true &&
      hasSpecialCharacterBool === true) {
        return true;
  } else {
    return remaining;
  }
}

function Register(props) {
  let [userName, setUserName] = useState('');
  let [password, setPassword] = useState('');
  let [toolTip, setToolTip] = useState(false);
  let [messages, setMessages] = useState('');

  const handleNameChange = function(event) {
    setUserName(event.target.value);
    setMessages('');
  };
 
  const handlePasswordChange = function(event) {
    setPassword(event.target.value);
    const remaining = isValidPassword(event.target.value);
    
    if (remaining === true) {
      document.getElementById('pword').style.border = '1px solid green';
      setMessages('');
    } else {
      document.getElementById('pword').style.border = '1px solid red';
      const result = [];
      for (let i = 0; i < remaining.length; i++) {
        const message = <p id = 'message'>
                          {remaining[i]}
                        </p>
        result.push(message);
      }

      setMessages(result);
    }
  };

  const onPasswordFocus = function() {
    setToolTip(true);
  }

  const onPasswordBlur = function() {
    //setToolTip(false);

  }

  const strongPassword = function() {
    const pw = generatePassword();
    document.getElementById('pword').value = pw;
    document.getElementById('pword').style.border = '1px solid green';
    setMessages('');
  }

  const checkForExistingUserName = function(userName) {
    let storedData = localStorage.getItem("accounts");
    storedData = JSON.parse(storedData);


    for (let i = 0; i < storedData.length; i++) {
      if (userName === storedData[i]['name']) {
        return true;
      }
    }

    return false;
  } 

  const formSubmit = function(e) {
    e.preventDefault();
    const userNameAndPassword = [];
    userNameAndPassword.push(userName.trim(), password.trim());
    const userNameAlreadyExists = checkForExistingUserName(userName);
    
    e.target.uname.value = '';
    e.target.pword.value = '';
    document.getElementById('pword').style.border = '1px solid rgb(214, 214, 214);'; // not working

    if (userNameAlreadyExists === true) {
      setMessages(<p id = 'message'>User name already exists</p>);
    } else {
      props.registerFormSubmit(userNameAndPassword);
    } 
  }

  useEffect(() => {
    let storedData = localStorage.getItem("accounts");
    if (storedData === undefined || storedData === null) {
      localStorage.setItem("accounts", JSON.stringify([]));
    }
  }, []);


  return (
    <div className="Register">

      <img id = 'registerBird' src = {require('./bird.png')}/>
      
      <div 
        id = 'registerCard'>
        <h1>Register for Twitter</h1>
      
        <form onSubmit = {formSubmit}>
          <input 
            type="text" 
            id="uname" 
            name="uname"
            placeholder = 'User name'
            maxlength="10"  
            autocomplete='off'
            onChange={handleNameChange}
          /><br/>
          <input 
            type="text" 
            id="pword" 
            name="pword"
            placeholder = 'Password' 
            maxlength="10" 
            autocomplete='off'
            onChange={handlePasswordChange}
            onFocus={onPasswordFocus}
            onBlur = {onPasswordBlur}
          /><br/>
          {
            toolTip === false ? "" :

            <div 
              id = 'toolTipCard'
              onClick = {strongPassword}
            >
              <p>Suggest strong password</p>
            </div>

          }
          <br/>
          <input 
            type="submit" 
            value="Enter"
            id = 'registerButton'
          />
        </form>

        <p id = 'passwordInfo'>The password should be at least six characters long and contain at least one upper case letter, one lower case letter, one number, and one special character.</p>

        <Link 
          to = "/"
          id = 'logInLink'
        >Login</Link>
 
      </div>

        <p
          id = 'messages'
        >{messages}</p>

    </div>
  );
}

export default Register;
