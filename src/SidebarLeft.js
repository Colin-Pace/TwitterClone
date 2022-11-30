import './SidebarLeft.css';
import Tabs from './Tabs';
import Id from './Id';

function SidebarLeft(props) {
  return (
    <div className="SidebarLeft">
      <Tabs
        handleHomeClick = {props.handleHomeClick}
        handleProfileClick = {props.handleProfileClick}
      />
      <Id 
        userName = {props.userName}
        logOutClick = {props.logOutClick}
      />
    </div>
  );
} 

export default SidebarLeft;
