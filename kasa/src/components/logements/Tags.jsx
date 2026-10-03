import PropTypes from "prop-types";
import "../../styles/index.sass";

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      <span className="tags-content">{tags}</span>
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.string.isRequired,
};

export default Tags;
