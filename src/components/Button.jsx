import { useState } from "react";

const Button = ({ text, svgComponents, defaultbtn, externalLink, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (externalLink) {
      window.open(externalLink, "_blank");
    } else if (onClick) {
      onClick();
    }
  };

  const styles = {
    position: "relative",
    width: defaultbtn ? "144px" : "124px",
    height: defaultbtn ? "48px" : "83px",
    backgroundColor: defaultbtn ? "#344DAB" : isHovered ? "#344DAB" : "#FFFFFF",
    color: defaultbtn ? "white" : isHovered ? "#FFFFFF" : "#1A1B1D",
    padding: defaultbtn ? "12px" : "12px 16px",
    border: "none",
    borderRadius: defaultbtn ? "6px" : "8px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: defaultbtn ? "center" : "start",
    justifyContent: "center",
    gap: defaultbtn ? "0" : "8px",
    transition: "background-color 0.3s ease-in-out",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
  };
  const borderStyles = {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    border: defaultbtn ? "3px solid #CBD0E5" : "1px solid #E4E4E4",
    opacity: isHovered ? "1" : "0",
    transition: "transform 0.3s ease-in-out",
    borderRadius: defaultbtn ? "6px" : "8px",
    pointerEvents: "none",
  };

  return (
    <button
      onClick={handleClick}
      style={styles}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <span style={borderStyles} />
      {!defaultbtn && svgComponents && svgComponents({ isHovered })}
      {text}
    </button>
  );
};

export default Button;
