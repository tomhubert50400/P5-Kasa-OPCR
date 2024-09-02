import { useState } from "react";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

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
      <p className="counter">
        {current + 1}/{length}
      </p>
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
