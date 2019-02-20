import React, { Component, Fragment } from 'react';
import firebaseInit from './config/firebase';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import HeaderLinks from './components/header/header-links';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Courses from './components/courses/courses';
import About from './components/about/about';
import GetInTouch from './components/get-in-touch/get-in-touch';
import Footer from './components/footer/footer';
import Private from './admin-panel/private';
import Read from './admin-panel/read';
import Update from './admin-panel/update';

import './assets/styles/css/index.min.css';

class App extends Component {
  state = {
    user: {},
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebaseInit.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact render={() => (
            <Fragment>
              <HeaderLinks />
              <Header />
              <Hero authenticated={this.state.user ? true : false } user={this.state.user} />
              <Courses />
              <About />
              <GetInTouch />
              <Footer />
            </Fragment>
          )} />
          <Route path='/private' render={
            (props) => (
              <Private authenticated={this.state.user ? true : false } user={this.state.user} />
            )
          } />
          <Route path='/read/:id' component={Read} />
          <Route path='/update/:id' component={Update} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
