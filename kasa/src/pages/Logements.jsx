import { useParams, Navigate } from "react-router-dom";
import LogementsData from "../assets/datas/logements.json";
import Carousel from "../components/Carousel";
import Tags from "../components/logements/Tags";
import Rating from "../components/logements/Rating";
import "../styles/index.sass";
import Host from "../components/logements/Host";
import Collapse from "../components/Collapse";

const Logements = () => {
  const { id } = useParams();
  const logement = LogementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  const tags = logement.tags.map((tag, i) => <Tags key={i} tags={tag} />);

  const equipmentsList = (
    <ul>
      {logement.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  );

  return (
    <div className="logement">
      <Carousel slides={logement.pictures} />
      <h1 className="logement-title">{logement.title}</h1>
      <p className="logement-location">{logement.location}</p>
      <div className="logement-tags">{tags}</div>
      <Host host={logement.host} />
      <Rating score={logement.rating} />
      <div className="collapse-container-logement">
        <Collapse
          title="Description"
          content={logement.description}
          customClass="logement"
        />
        <Collapse
          title="Equipements"
          content={equipmentsList}
          customClass="logement"
        />
      </div>
    </div>
  );
};

export default Logements;
