import './SidebarLeft.css';
import Tabs from './Tabs';
import Id from './Id';

function SidebarLeft(props) {
  return (
    <div className="SidebarLeft">
      <Tabs/>
      <Id 
        userName = {props.userName}
      />
    </div>
  );
}

export default SidebarLeft;
