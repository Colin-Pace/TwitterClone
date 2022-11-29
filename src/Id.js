import './Id.css'

function Id(props) {
  const logOutClick = function() {
    props.logOutClick();
  }
  
  return (
    <div className="Id">
      <img id = 'accountImage' src = {require('./account.png')}/>
      <p id = 'accountName'>{props['userName']}</p>
      <p 
        id = 'logOut' 
        onClick = {logOutClick}  
      >Log Out
      </p>
    </div>
  );
}

export default Id;
 