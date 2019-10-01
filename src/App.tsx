import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Link,
  Switch,
} from "react-router-dom";
import SettingPage from "./components/SettingPage";
import Timer from "./components/Timer";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SettingPage} />
          <Route exact path="/timer" component={Timer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
