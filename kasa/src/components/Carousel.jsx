import { useState } from "react";

// Déclaration du composant Carousel qui prend une prop 'slides'
const Carousel = ({ slides }) => {
  // Déclaration d'un état local 'current' pour garder une trace de l'index de l'image actuelle
  const [current, setCurrent] = useState(0);
  // Longueur du tableau 'slides' (nombre total d'images)
  const length = slides.length;

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    // Si on est à la dernière image, revenir à la première (index 0), sinon passer à l'image suivante
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Fonction pour revenir à l'image précédente
  const prevSlide = () => {
    // Si on est à la première image, aller à la dernière image, sinon passer à l'image précédente
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Vérification : Si 'slides' n'est pas un tableau ou est vide, ne rien afficher (retourner null)
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slide">
      {length > 1 && (
        <p className="arrows left-arrow" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </p>
      )}
      {length > 1 && (
        <p className="arrows right-arrow" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </p>
      )}
      {/* Parcourir le tableau 'slides' pour afficher chaque image */}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider active" : "slider"}
          >
            {/* Afficher seulement l'image actuelle */}
            {index === current && (
              <img src={image} alt="appartement" className="slide-image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
