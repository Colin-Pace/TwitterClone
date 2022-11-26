import './Id.css'

function Id() {
  return (
    <div className="Id">
      <img id = 'accountImage' src = {require('./account.png')}/>
      <p id = 'accountName'>Account name</p>
      <img id = 'threeDots' src = {require('./threeDots.png')}/>
    </div>
  );
}

export default Id;
 