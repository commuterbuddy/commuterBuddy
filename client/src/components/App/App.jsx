import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import Login from '../Login/Login.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  }
  
  render() {
    return (
      <BrowserRouter>
        <Navigation authenticated={this.state.authenticated} />
        <Switch>
          <Route path='/' exact component={ Login } />
          {/* <Route path='/results' component={ Results } />
          <Route path='/history' component={ History } /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;