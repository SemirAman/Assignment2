import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Navbar";

import "./App.css";
import eventHistory from "./eventHistory";
import chatHistory from "./chatHistory";
import Rooms from "./Rooms";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/eventHistory" component={eventHistory} />
            <Route path="/chatHistory" component={chatHistory} />
            <Route path="/Rooms" component={Rooms} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
