import React from "react";
import logo from "./logo.svg";
import Time from "./components/Time";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <form>
        <div>
          <label>Quit Time</label>
          <br />
          <Time />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Set
        </a>
      </form>
    </div>
  );
};

export default App;
