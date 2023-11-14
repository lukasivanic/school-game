import React, { useState, useEffect } from "react";
import Squares from "../data";

const ClickerGame = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const storedHighScore = localStorage.getItem("highScore");
    if (storedHighScore) {
      setHighScore(parseInt(storedHighScore, 10));
    }
  }, []);

  const handleButtonClick = () => {
    const newScore = score + 1;
    setScore(newScore);

    if (newScore > highScore) {
      setHighScore(newScore);
      localStorage.setItem("highScore", newScore.toString());
    }
  };

  const handleReset = () => {
    setScore(0);
  };
  const [squareData, setSquareData] = useState(Squares);

  function handleColorChange(index) {
    handleButtonClick();
    const updatedData = [...squareData];
    const randomIndex = Math.floor(Math.random() * updatedData.length);
    if (squareData[index].color === "red") {
      updatedData[index].color = "blue";
      updatedData[randomIndex].color = "red";
    } else {
      setScore(0);
    }
    setSquareData(updatedData);
  }

  function getRandom() {
    const updatedData = [...squareData];
    const randomIndex = Math.floor(Math.random() * updatedData.length);
    updatedData[randomIndex].color = "red";
    return setSquareData(updatedData);
  }

  return (
    <>
      <div className="scoreBoard">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => getRandom()}>Start Game</button>
      </div>
      <div className="gameGrid">
        {Squares.map((item, id) => (
          <div
            style={{ backgroundColor: item.color }}
            key={id}
            className="gameGridItem"
            onClick={() => handleColorChange(id)}
          >
            {item.id}
          </div>
        ))}
      </div>
    </>
  );
};

export default ClickerGame;
