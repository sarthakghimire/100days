import "./Card.css";

function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.image}></img>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
