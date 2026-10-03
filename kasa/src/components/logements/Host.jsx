import PropTypes from "prop-types";
import "../../styles/index.sass";

const Host = (props) => {
  const { name, picture } = props.host;

  const nameParts = name.split(" ");

  return (
    <div className="host">
      <p className="host-name">
        {nameParts.map((part, index) => (
          <span key={index}>
            {part}
            {index < nameParts.length - 1 && <br />}
          </span>
        ))}
      </p>
      <img src={picture} alt={name} className="host-image" />
    </div>
  );
};

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default Host;
