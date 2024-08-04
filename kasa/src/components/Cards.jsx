import "../styles/index.sass";

import data from "../assets/datas/logements.json";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="cards">
      {data.map((logement) => (
        <Link
          to={`/logement/${logement.id}`}
          className="card"
          key={logement.id}
        >
          <img src={logement.cover} alt={logement.title} className="card-img" />
          <h2 className="card-title">{logement.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
