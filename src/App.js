import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        <FunctionComponentExample />
      </header>
    </div>
  );
}

const FunctionComponentExample = () => {
  const [count, setCount] = useState(0);
  const [isLiked, setLiked] = useState(false);
  const [color, setColor] = useState("#fff");

  // Mounting Phase
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Unmount
    return () => {
      clearInterval(interval);
    };
  });

  // Updating Phase
  useEffect(() => {
    alert(`Like is ${isLiked}`);
    if (isLiked) setColor("blue");
    else setColor("#fff");
  }, [isLiked]);

  return (
    <>
      <button
        style={{ height: "30px", width: "30px", backgroundColor: "grey" }}
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
      <button style={{ color: color }} onClick={() => setLiked(!isLiked)}>
        Like
      </button>
    </>
  );
};

export default App;
