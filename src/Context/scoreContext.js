import React, { useState, createContext } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return(
    <ScoreContext.Provider value={{score: [score, setScore],
    highScore: [highScore, setHighScore]}}>
      { children }
    </ScoreContext.Provider>
  )
}