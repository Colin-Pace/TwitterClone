import './Id.css'

function Id(props) {
  return (
    <div className="Id">
      <img id = 'accountImage' src = {require('./account.png')}/>
      <p id = 'accountName'>{props['userName']}</p>
      <img id = 'threeDots' src = {require('./threeDots.png')}/>
    </div>
  );
}

export default Id;
 