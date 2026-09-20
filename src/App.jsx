import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const audioRef = useRef(null);

const playKeySound = () => {
  const audio = new Audio("/sounds/key.mp3");

  audio.volume = 1;

  audio.play()
    .then(() => {
      console.log("✅ Sound played");
    })
    .catch((error) => {
      console.error("❌ Playback failed:", error);
    });
};

  const handleKeyDown = (event) => {
    // Don't play sounds for modifier keys
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

  return (
    <main className="app">
      <header className="header">
        <div>
          <p className="eyebrow">KEYBOARD SOUNDS</p>
          <h1>Type something.</h1>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Sounds ready
        </div>
      </header>

      <section className="typing-section">
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Start typing here..."
          autoFocus
        />
      </section>
    </main>
  );
}

export default App;