import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login" //lo que esta en : es un parametro. Luego lo obtenemos como this.props.match.params.login
                  component={User}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
