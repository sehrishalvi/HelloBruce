import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/**
 * EXERCISE:
 * Implement the image as a React Component that
 * takes the gif ID as single attriute:
 *
 * <Giphy id="l0MYGb1LuZ3n7dRnO" />
 */

const App = () => {
  const name = "Bruce";
  const surname = "Willis";
  const gif1 = "l0MYGb1LuZ3n7dRnO";

  const fullName = `${name} ${surname}`;
  const imgUrl = `https://media.giphy.com/media/${gif1}/giphy.gif`;

  return (
    <div className="App">
      <p>Hello {fullName}</p>
      <img src={imgUrl} alt={`A warm welcome from ${fullName}`} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
