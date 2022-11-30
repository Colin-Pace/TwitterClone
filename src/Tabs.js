import './Tabs.css';

function Tabs(props) {
  const handleHomeClick = function() {
    props.handleHomeClick();
  }

  const handleProfileClick = function() {
    props.handleProfileClick();
  }
  
  return (
    <div className="Tabs">
      <img id = "bird" src = {require('./bird.png')}></img>

      <div id = "menuItems">
        <p onClick = {handleHomeClick}>Home</p>
        <p onClick = {handleProfileClick}>Profile</p>
      </div>
    </div>
  );
}

export default Tabs;
