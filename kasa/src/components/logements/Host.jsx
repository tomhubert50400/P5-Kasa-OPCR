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

export default Host;
