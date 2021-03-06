import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
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

  handleAuthenticate() {
    const { authenticated } = this.state;
    if (authenticated) {
      localStorage.removeItem('user');
    }
    this.setState({
      authenticated: !authenticated
    });
  }

  render() {
    const { authenticated } = this.state;

    return (
      <HashRouter>
        <Navigation authenticate={this.handleAuthenticate} authenticated={authenticated} />
        <Switch>
          <Route path='/' exact render={() => <Login authenticate={this.handleAuthenticate} authenticated={authenticated}/>}  />
          <Route path='/results' component={Results} />
          <Route exact path='/history' render={() => <History />} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;