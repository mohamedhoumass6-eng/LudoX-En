import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <main className="app">
      <img
        className="logo-image"
        src="/logo.svg"
        alt="LudoX En"
      />

      <div className="logo">LudoX En 🎲</div>

      <div className="subtitle">
        Play • Compete • Win
      </div>

      <div className="card">
        <h2>Welcome to LudoX En</h2>
        <p>Ready to play Ludo?</p>

        <button className="play">
          PLAY NOW
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
