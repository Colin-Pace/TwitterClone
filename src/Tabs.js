import './Tabs.css';

function Tabs() {
  return (
    <div className="Tabs">
      <img id = "bird" src = {require('./bird.png')}></img>

      <div id = "menuItems">
        <p>Home</p>
        <p>Explore</p>
        <p>Notifications</p>
        <p>Messages</p>
        <p>Bookmarks</p>
        <p>Lists</p>
        <p>Profile</p>
        <p>More</p>
        <button id = "tweetButton">Tweet</button>
      </div>
    </div>
  );
}

export default Tabs;
