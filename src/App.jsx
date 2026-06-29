import { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");
  const [inputValue, setInputValue] = useState("");

  const handleUpdateText = () => {
    setGreeting(inputValue);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={handleUpdateText}>Update text</button>
      </div>
    </div>
  );
}

export default App;
