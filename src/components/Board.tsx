import { useEffect, useState } from "react";
import Card from "./Card";
import Question from "../Question";
import "./Board.css";
import WheelComponent from "./wheel/Wheel";
import { data } from "./Data";

// const generateCards = () => {
//   return cards.sort(() => Math.random() - 0.5);
// };

const NewComersBoard = (props: {
  cards: Question[];
  onClick: (id: number) => void;
}) => {
  return (
    <div className="board">
      {props.cards.map((card, index) => (
        <Card
          key={index}
          d={card}
          index={index}
          onFlip={() => props.onClick(card.id)}
        />
      ))}
    </div>
  );
};

function Board() {
  const [cards, setCards] = useState<Question[]>([]);

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    let shuffled = data.sort(() => Math.random() - 0.5);
    shuffled = shuffled.map((card, index) => {
      return { ...card, id: index, flipped: false };
    });
    setCards(shuffled);
  };

  const handleCardClick = (cardId: number) => {
    const newCards = [...cards];
    const card = newCards.find((c) => c.id === cardId);
    console.log(card);
    if (card) {
      card.flipped = !card.flipped;
      setCards(newCards);
    }
  };

  return (
    <div className="boardMain">
      <div className="leftBoard">
        <div className="headerB">
          <h1>Board</h1>
          <button onClick={shuffleQuestions} style={{ height: "50px" }}>
            Shuffle
          </button>
        </div>
        <NewComersBoard cards={cards} onClick={handleCardClick} />
      </div>
      <div className="rightBoard">
        <WheelComponent />
      </div>
    </div>
  );
}

export default Board;
