import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import Login from '../Login/Login.jsx';
import Results from '../Results/Results.jsx';
import History from '../History/History.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
    this.handleAuthenticate = this.handleAuthenticate.bind(this);
  }

  handleAuthenticate(auth) {
    const { authenticated } = this.state;
    this.setState({
      authenticated: auth
    });
  }

  render() {
    const { authenticated } = this.state;
    const childProps = {
      authenticated,
      handleAuthenticate: this.handleAuthenticate
    };
    return (
      <HashRouter>
        <Navigation authenticated={authenticated} />
        <Switch>
          <Route path="/" exact render={() => <Login childProps={childProps}/>}  />
          <Route path='/results' component={Results} />
          <Route path='/history' render={() => <History />} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
