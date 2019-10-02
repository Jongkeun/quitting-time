import React, { useState } from "react";
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
import storage from "./IO/storage";

const App: React.FC = () => {
  const [isSet, setIsSet] = useState(false);
  const checkSet = () => {
    storage.get().then((data: any) => {
      if (data.isSet) {
        setIsSet(true);
      }
    });
  };
  checkSet();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SettingPage} />
          <Route exact path="/timer" component={Timer} />
        </Switch>
        {isSet ? <Redirect to="/timer" /> : null}
      </div>
    </Router>
  );
};

export default App;
