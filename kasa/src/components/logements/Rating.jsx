import PropTypes from "prop-types";
import "../../styles/index.sass";
import fullStar from "../../assets/images/star.svg";
import emptyStar from "../../assets/images/empty-star.svg";

const Rating = (props) => {
  const score = props.score;
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      <div className="star-container">
        {stars.map((star, i) => {
          return (
            <img
              key={i}
              src={star <= score ? fullStar : emptyStar}
              alt="star"
              className="rating-star"
            />
          );
        })}
      </div>
    </div>
  );
};

Rating.propTypes = {
  score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Rating;
