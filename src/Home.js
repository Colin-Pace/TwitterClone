import './Home.css';
import {useState} from 'react';

function Home() {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    console.log(message);
  };

  return (
    <div className="Home">
      <p id = 'homeTitle'>Home</p>
      <div>
        <img id = 'accountPic' src = {require('./account.png')}/>
        <input 
          id = 'tweetInput' 
          type = 'text' 
          placeholder = "What's happening?"
          onChange={handleChange}
          value={message}
          autoComplete="off"
        />
      </div>
      <button 
        id = 'homeTweetButton'
        onClick={handleClick}
        >Tweet</button>
    </div>
  );
}

export default Home;
