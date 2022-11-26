import './SidebarRight.css';
import WhatsHappening from './WhatsHappening';

function SidebarRight() {
  return (
    <div className="SidebarRight">
      <input id = 'searchTwitter' type = 'text' placeholder = 'Search Twitter'></input>
      
      <WhatsHappening />
    
      <div id = 'whoToFollow'> 
        <p id = 'wTFTitle'>Who to follow</p>
      </div>
    </div>
  );
}

export default SidebarRight;
