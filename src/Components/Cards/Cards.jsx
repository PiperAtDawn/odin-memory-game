import Card from "../Card/Card";
import "./Cards.css";
import { useState, useContext } from "react";
import { ScoreContext } from "../../Context/scoreContext";

const Cards = ({ images }) => {

  const copyImages = () => JSON.parse(JSON.stringify(images));
  const [shuffled, setShuffled] = useState(copyImages());
  const scoreContext = useContext(ScoreContext);
  const [score, setScore] = scoreContext.score;
  const [highScore, setHighScore] = scoreContext.highScore;

  const shuffle = () => {
    let currentIndex = shuffled.length;
    let randomIndex;
    const newArray = [...shuffled];

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex], newArray[currentIndex]];
    }
    setShuffled([...newArray]);
  }

  const reset = () => {
    setShuffled(copyImages());
    if (score + 1 > highScore) {
      setHighScore(score);
    }
    setScore(0);
  }

  const increaseScore = () => {
    setScore(score + 1);
    if (score + 1 === 8) {
      alert("Congradulations! You got the maximum score!");
      reset();
    }
  }

  const handleClick = id => {
    const target = shuffled
      .find(s => s.id === id);
    if (target.clicked) {
      alert("Sorry! You've clicked that one already!");
      reset();
    } else {
      target.clicked = true;
      increaseScore();
      shuffle();
    }
  }

  return (
    <div className="cards">
      {
        shuffled.map(img => (
          <Card
            image={img}
            onClick={handleClick}
            key={img.id}
            id={img.id}
          />
        ))
      }
    </div>
  )
}

export default Cards;
