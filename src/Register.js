import { Link } from "react-router-dom";
import './Register.css';

function Register(props) {
  const formSubmit = function(e) {
    e.preventDefault();

    const userNameAndPassword = [];
 
    const userName = e.target.uname.value;
    const password = e.target.pword.value;

    userNameAndPassword.push(userName, password);

    e.target.uname.value = "";
    e.target.pword.value = "";

    props.registerFormSubmit(userNameAndPassword);
  }

  return (
    <div className="Register">

      <img id = 'registerBird' src = {require('./bird.png')}/>
      
      <div id = 'registerCard'>
        <h1>Register for Twitter</h1>
      
        <form onSubmit = {formSubmit}>
          <input 
            type="text" 
            id="uname" 
            name="uname"
            placeholder = 'User name'  
          /><br/>
          <input 
            type="text" 
            id="pword" 
            name="pword"
            placeholder = 'Password'  
          /><br/><br/>
          <input 
            type="submit" 
            value="Enter"
            id = 'registerButton'
          />
        </form> 

        <Link 
          to = "/"
          id = 'logInLink'
        >Login</Link>

      </div>
    </div>
  );
}

export default Register;
