import ReactCardFlip from "react-card-flip";
import Question from "../Question";
import "./Card.css";
import checked from "../assets/checked.png";

export default function FlipCard(props: {
  d: Question;
  onFlip: () => void;
  index: number;
}) {
  const { d, onFlip, index } = props;

  return (
    <ReactCardFlip isFlipped={d.flipped} flipDirection="horizontal">
      <div className="flipCard front" onClick={onFlip}>
        <p>Card {index + 1}</p>
      </div>

      <div className="flipCard back">
        <p>{d.content}</p>
        <img className="back-icon" src={checked} alt="checked" />
      </div>
    </ReactCardFlip>
  );
}
