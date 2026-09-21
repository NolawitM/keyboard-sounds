import { useState } from "react";
import "./App.css";

/*const keyboardRows = [
  [
    "Esc",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ],
  [
    "Tab",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "[",
    "]",
    "\\",
  ],
  [
    "Caps",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ";",
    "'",
    "Enter",
  ],
  [
    "Shift",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    ",",
    ".",
    "/",
    "Shift",
  ],
  ["Ctrl", "Alt", "Space", "Alt", "Ctrl"],
];*/

function App() {
  const [text, setText] = useState("");
  const [isSoundOn, setIsSoundOn] = useState(true);

  const playKeySound = () => {
    if (!isSoundOn) return;

    const audio = new Audio("/sounds/key.mp3");
    audio.volume = 0.65;

    audio.play().catch(() => {});
  };

  const handleKeyDown = (event) => {
    if (
      event.key === "Shift" ||
      event.key === "Control" ||
      event.key === "Alt" ||
      event.key === "Meta"
    ) {
      return;
    }

    playKeySound();
  };

  const clearText = () => {
    setText("");
  };

  return (
    <main className="app">
      {/* NAVIGATION */}
      <nav className="nav">
        <div className="brand">
          <div className="brand-mark">L</div>
          <span>Keyboard Sounds</span>
        </div>

        <div className="nav-actions">
          <button className="sound-toggle" onClick={() => setIsSoundOn(!isSoundOn)}>
            <span className={`sound-indicator ${isSoundOn ? "on" : ""}`} />
            {isSoundOn ? "Sound on" : "Sound off"}
          </button>

          <button className="icon-button" aria-label="Settings">
            <span>•••</span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-label">
          <span className="hero-line" />
          YOUR SPACE TO TYPE
        </div>

        <h1>
          Make every
          <span> keystroke </span>
          count.
        </h1>

        <p>
          A simple typing space with satisfying keyboard sounds.
          <br />
          Put on your headphones and just start typing.
        </p>
      </section>

      {/* TYPING CARD */}
      <section className="workspace">
        <div className="workspace-top">
          <div className="workspace-label">
            <span className="live-dot" />
            LIVE TYPING
          </div>

          <div className="workspace-actions">
            <span>{text.length} characters</span>

            <button onClick={clearText}>Clear</button>
          </div>
        </div>

        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Start typing something..."
          autoFocus
          spellCheck="false"
        />

        <div className="workspace-footer">
          <span>Every key has a sound.</span>
          <span>⌘ Type away</span>
        </div>
      </section>
      {/* KEYBOARD */}
   
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <span className="footer-flower">✦</span>
          <span>
            Powered by <strong>Lily Design</strong>
          </span>
        </div>

        <span className="footer-copy">
          Designed & built with curiosity.
        </span>
      </footer>
    </main>
  );
}

export default App;