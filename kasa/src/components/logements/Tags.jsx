import React from "react";
import "../../styles/index.sass";

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      <span className="tags-content">{tags}</span>
    </div>
  );
};

export default Tags;
