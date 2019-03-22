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
    let user = localStorage.getItem('user');
    axios
      .get("/api/scenarios", {params: {username: user}})
      .then(({data}) => {
        this.setState({
          data: [...data]
        });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className={styles.container}>
        <div>
          <h2>Jun's Commute History</h2>
          {this.state.data.map((scenario, i) => <Scenario key={i} scenario={scenario} />)}
        </div>
      </div>
    );
  }
}

export default History;
