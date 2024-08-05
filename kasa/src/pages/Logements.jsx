import { useParams, Navigate } from "react-router-dom";
import LogementsData from "../assets/datas/logements.json";
import Carousel from "../components/Carousel";
import Tags from "../components/logements/Tags";
import Rating from "../components/logements/Rating";
import "../styles/index.sass";
import Host from "../components/logements/Host";

const Logements = () => {
  const { id } = useParams();
  const logement = LogementsData.find((logement) => logement.id === id);

  const tags = logement.tags.map((tag, i) => {
    return <Tags key={i} tags={tag} />;
  });

  return (
    <>
      {logement ? (
        <div className="logement">
          <Carousel slides={logement.pictures} />
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="logement-tags">{tags}</div>
          <Host host={logement.host} />
          <Rating score={logement.rating} />
        </div>
      ) : (
        <Navigate to="/404" />
      )}
    </>
  );
};

export default Logements;
