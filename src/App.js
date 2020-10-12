import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import User from "./components/users/User";

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Notfound from "./components/pages/Notfound";

const App = () => {
  // search Github Users
  // Get a single github user
  // Get User Repos
  // clear users
  // set aalert
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={(props) => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
