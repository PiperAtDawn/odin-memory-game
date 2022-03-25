import "./Card.css";

const Card = ({ image, onClick, id }) => {

  return (
    <div
      className="card"
      onClick={() => { onClick(id) }}
    >
      <img src={image.src} alt={image.name} />
      <span>{ image.name }</span>
    </div>
  )
}

export default Card;
