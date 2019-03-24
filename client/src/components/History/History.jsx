import React, { Component } from 'react';
import axios from 'axios';
import styles from './History.css';
import Scenario from '../Scenario/Scenario.jsx';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Jun',
      data: []
    }
  }

  componentDidMount() {
    let user = localStorage.getItem('user');
    axios
      .get("/api/scenariosDev", {params: {username: this.state.username}})
      .then(({data}) => {
        this.setState({
          username: user,
          data: [...data]
        });
      })
      .catch(err => console.log(err))
  }

  render() {
    const { username } = this.state;
    return (
      <div className={styles.container}>
        <div>
          <h2>{username}'s Commute History</h2>
          {this.state.data.map((scenario, i) => <Scenario key={i} scenario={scenario} />)}
        </div>
      </div>
    );
  }
}

export default History;
