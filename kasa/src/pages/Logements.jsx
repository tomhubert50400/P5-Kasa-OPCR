import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import LogementsData from "../assets/datas/logements.json";
import Carousel from "../components/Carousel";

const Logements = () => {
  const { id } = useParams();
  const logement = LogementsData.find((logement) => logement.id === id);

  return (
    <>
      {logement ? (
        <div className="logement">
          <Carousel slides={logement.pictures} />
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
        </div>
      ) : (
        <Navigate to="/404" />
      )}
    </>
  );
};

export default Logements;
