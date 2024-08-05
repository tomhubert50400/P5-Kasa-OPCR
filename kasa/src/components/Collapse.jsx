import { useState, useRef, useEffect } from "react";
import "../styles/index.sass";

const Collapse = ({ title, content, customClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const display = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight =
        contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className={`collapse-item-${customClass}`}>
      <div className="collapse-title-container" onClick={display}>
        <h2 className="collapse-title">{title}</h2>
        <div className="collapse-icon">
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </div>
      </div>
      <div
        className={`collapse-container-content ${isOpen ? "open" : "closed"}`}
        ref={contentRef}
      >
        <span className="collapse-content">{content}</span>
      </div>
    </div>
  );
};

export default Collapse;
