import './Head.css';

function Head(props) {
  console.log(props);
  return (
    <div className="Head">
      <p>Thread</p>
      <p>
        {
          // props.tweet['tweet'] !== undefined ?      // causes error
          //   props.tweet['tweet'] : ''
        }
      </p>
    </div>
  );
}

export default Head;
 