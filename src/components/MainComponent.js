import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FEATURES } from '../shared/Features';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: FEATURES
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home features={this.state.features} />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  };
}

export default Main;