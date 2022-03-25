import "./Header.css";
import { useContext } from "react";
import { ScoreContext } from "../../Context/scoreContext";

const Header = () => {

  const scoreContext = useContext(ScoreContext);
  const [score, ] = scoreContext.score;
  const [highScore, ] = scoreContext.highScore;

  return (
    <header>
      <div></div>
      <h1>Memory Game</h1>
      <div className="scores">
        <span>Score: { score }</span>
        <span>High Score: { highScore }</span>
      </div>
    </header>
  )
};

export default Header;
