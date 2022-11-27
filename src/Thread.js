import './Thread.css';

function Thread() {
  let storedData = localStorage.getItem("tweets");
  if (storedData.length === null || storedData === 0) {
    localStorage.setItem("tweets", JSON.stringify([]));
  } else {
    storedData = JSON.parse(storedData);
  }

  console.log(storedData);

  return (
    <div className="Thread">
    </div>
  );
}

export default Thread;
