import './LogIn.css';
import { Link } from "react-router-dom";

function LogIn(props) {
  const formSubmit = function(e) {
    e.preventDefault();

    const userNameAndPassword = [];

    const userName = e.target.uname.value;
    const password = e.target.pword.value;

    userNameAndPassword.push(userName, password);

    e.target.uname.value = "";
    e.target.pword.value = ""; 

    props.logInFormSubmit(userNameAndPassword);
    //console.log(userNameAndPassword);
  }

  return (
    <div className="LogIn">
    
      <img id = 'logInBird' src = {require('./bird.png')}/>

      <div id = 'card'>
        <h1>Sign into Twitter</h1>

        <form onSubmit = {formSubmit}>
          <input 
            type="text" 
            id="uname" 
            name="uname"
            placeholder = 'User name'
            maxlength="10"
          /><br/>
          <input 
            type="text" 
            id="pword" 
            name="pword"
            placeholder = 'Password'
            maxlength="10"
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
        >Register</Link>


      </div>

    </div>
  );
}

export default LogIn;
