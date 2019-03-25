import React, { Component } from 'react';
import axios from 'axios';
import styles from './History.css';
import Scenario from '../Scenario/Scenario.jsx';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    axios
      .get("/api/scenariosDev", {params: {username: user}})
      .then(({data}) => {
        this.setState({
          username: user,
          data: [...data]
        });
      })
      .catch(err => console.log(err))
  }

  render() {
    const user = localStorage.getItem('user');
    const { data } = this.state;
    if (user) {
      if (data) {
        return (
          <div className={styles.container}>
            <div>
              <h2>{user}'s Commute History</h2>
              {data.map((scenario, i) => <Scenario key={i} scenario={scenario} />)}
            </div>
          </div>
        );
      } else {
        <div>
          <h2>You have no commute history saved.</h2>
        </div>
      }
    } else {
      return null;
    }
  }
}

export default History;
