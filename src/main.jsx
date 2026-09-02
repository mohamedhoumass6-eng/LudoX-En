import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function Board() {
  const cells = Array.from({ length: 49 });

  return (
    <div className="board">
      {cells.map((_, index) => (
        <div
          key={index}
          className={`cell cell-${index}`}
        />
      ))}
    </div>
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
        <h2>Ludo Board</h2>

        <Board />

        <button className="play">
          ROLL DICE 🎲
        </button>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
