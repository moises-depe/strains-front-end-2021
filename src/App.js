import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { setUserStorage, getStoredUserToken } from './UTILS/LocalStorageUtils.js';

import Header from './COMPONENTS/Header.js';
import PrivateRoute from './COMPONENTS/PrivateRoute.js';
import PopUp from './COMPONENTS/PopUp.js';

import SignInPage from './AUTH/SignInPage.js';
import SignUpPage from './AUTH/SignUpPage.js';

// import FavoritesPage from './FavoritesPage.js';
import SearchPage from './SearchPage.js';
import HomePage from './HomePage.js';
import AboutUsPage from './AboutUsPage.js';
import SharedPage from './SharedPage.js';

export default class App extends React.Component {

  state = {
    token: getStoredUserToken(),
    showPopup: true,
  }

  handleUserChange = (user) => {
    setUserStorage(user);

    this.setState({
      token: user.token,
    })
  }

  handleLogout = () => {
    const user = {
      id: '',
      email: '',
      token: '',
    }

    this.handleUserChange(user);
  }

  //Age verification popup box
  togglePopup(e) {
    e.preventDefault();

    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        {
          this.state.showPopup
            ? <PopUp
              closePopup={this.togglePopup.bind(this)}
            />
            : null
        }
        <Router>
          <Header
            token={this.state.token}
            handleLogout={this.handleLogout} />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) =>
                <HomePage
                  {...routerProps}
                />}
            />
            {/* <PrivateRoute
              path="/favorites"
              exact
              token={this.state.token}
              render={(routerProps) =>
                <FavoritesPage
                  token={this.state.token}
                  {...routerProps}
                />}
            /> */}
            <PrivateRoute
              path="/search"
              exact
              token={this.state.token}
              render={(routerProps) =>

                <SearchPage
                  token={this.state.token}
                  {...routerProps}
                />
              }
            />
            <Route
              path="/signin"
              exact
              render={(routerProps) =>
                <SignInPage
                  handleUserChange={this.handleUserChange}
                  {...routerProps}
                />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) =>
                <SignUpPage
                  handleUserChange={this.handleUserChange}
                  {...routerProps}
                />}
            />
            <Route
              path="/about"
              exact
              render={(routerProps) =>
                <AboutUsPage
                  {...routerProps}
                />}
            />
            <Route
              path="/share/:id"
              exact
              render={(routerProps) =>
                <SharedPage
                  {...routerProps}
                />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}