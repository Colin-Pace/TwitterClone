import './Home.css';
import {useState} from 'react';

function Home(props) {
  const [tweet, setTweet] = useState('');

  const handleChange = event => {
    setTweet(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    props.getTweet(tweet);
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
          value={tweet}
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
