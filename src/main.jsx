import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const colors = ["red", "green", "yellow", "blue"];

function Board() {
  const [dice, setDice] = useState(1);

  function rollDice() {
    setDice(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <>
      <div className="ludo-board">
        <div className="home red-home">
          <div className="piece red-piece"></div>
          <div className="piece red-piece"></div>
          <div className="piece red-piece"></div>
          <div className="piece red-piece"></div>
        </div>

        <div className="home green-home">
          <div className="piece green-piece"></div>
          <div className="piece green-piece"></div>
          <div className="piece green-piece"></div>
          <div className="piece green-piece"></div>
        </div>

        <div className="home yellow-home">
          <div className="piece yellow-piece"></div>
          <div className="piece yellow-piece"></div>
          <div className="piece yellow-piece"></div>
          <div className="piece yellow-piece"></div>
        </div>

        <div className="home blue-home">
          <div className="piece blue-piece"></div>
          <div className="piece blue-piece"></div>
          <div className="piece blue-piece"></div>
          <div className="piece blue-piece"></div>
        </div>

        <div className="center">LudoX</div>
      </div>

      <div className="dice-area">
        <div className="dice">{dice}</div>

        <button className="play" onClick={rollDice}>
          ROLL DICE 🎲
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <main className="app">
      <img className="logo-image" src="/logo.svg" alt="LudoX En" />

      <div className="logo">LudoX En 🎲</div>

      <div className="subtitle">
        Play • Compete • Win
      </div>

      <div className="game-card">
        <h2>Ludo Game</h2>
        <Board />
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
