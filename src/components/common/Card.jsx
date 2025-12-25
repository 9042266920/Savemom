import "../../styles/card.css";

const Card = ({ image, heading, paragraph, bgGradient, textColor }) => {
  return (
    <div
      className="card"
      style={{
        background: bgGradient,
        color: textColor,
      }}
    >
      <img src={image} alt={heading} className="card-image" />

      <h3 className="card-heading">{heading}</h3>

      <p className="card-paragraph">{paragraph}</p>
    </div>
  );
};

export default Card;
