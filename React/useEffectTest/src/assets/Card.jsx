import { NavLink } from "react-router-dom";
import "./Card.css";

function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <NavLink to={"/read-more/" + props.id}>
          <button>Read More</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
