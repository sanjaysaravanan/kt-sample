import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TodoComponent from "./ReduxSample";

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

const FunctionComponentExample = ({ email }) => {
  const [count, setCount] = useState(0);
  const [isLiked, setLiked] = useState(false);
  const [color, setColor] = useState("#fff");

  const [todos, setTodos] = useState([]);

  // Mounting Phase
  /**
   *
   * It is phase where You load the pre-existing details that You intend to show to the user by default
   *
   */
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
    // alert(`Like is ${isLiked}`);
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
      <CustomButton variant="primary" />
      <TodoComponent />
    </>
  );
};

const CustomButton = ({ variant, value }) => {
  const renderBackColor = (_variant) => {
    switch (_variant) {
      case "primary":
        return "green";
      case "secondary":
        return "red";
      default:
        return "blue";
    }
  };
  return (
    <button style={{ backgroundColor: renderBackColor(variant) }}>
      {value}
    </button>
  );
};

CustomButton.propTypes = {
  variant: "primary" | "secondary",
  value: PropTypes.string,
};

CustomButton.defaultProps = {
  variant: "primary",
  value: "None",
};

export default App;

/**
 *
 *
 * Render
 *
 *
 */
