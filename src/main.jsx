import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  const [dice, setDice] = useState(1);
  const [position, setPosition] = useState(0);

  function rollDice() {
    const number = Math.floor(Math.random() * 6) + 1;
    setDice(number);
  }

  function movePiece() {
    if (dice > 0) {
      setPosition((oldPosition) => oldPosition + dice);
    }
  }

  return (
    <main className="app">
      <img className="logo-image" src="/logo.svg" alt="LudoX En" />

      <div className="logo">LudoX En 🎲</div>

      <div className="subtitle">
        Play • Compete • Win
      </div>

      <div className="game-card">
        <h2>Ludo Game</h2>

        <div className="game-path">
          <div
            className="player-piece"
            style={{
              left: `${Math.min(position * 7, 84)}%`
            }}
            onClick={movePiece}
          >
            🔴
          </div>

          <div className="finish">🏆</div>
        </div>

        <div className="dice">
          {dice}
        </div>

        <button className="play" onClick={rollDice}>
          ROLL DICE 🎲
        </button>

        <p className="instruction">
          Roll the dice, then tap your piece.
        </p>

        <p className="position">
          Position: {position}
        </p>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
