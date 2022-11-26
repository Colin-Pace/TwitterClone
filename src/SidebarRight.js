import './SidebarRight.css';

function SidebarRight() {
  return (
    <div className="SidebarRight">
      <input id = 'searchTwitter' type = 'text' placeholder = 'Search Twitter'></input>
      <div id = 'whatsHappening'>
        <p id = 'wHTitle'>What's happening</p>

      </div>
      <div id = 'whoToFollow'>
        <p id = 'wTFTitle'>Who to follow</p>
      </div>
    </div>
  );
}

export default SidebarRight;
