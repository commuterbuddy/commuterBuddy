import React, { Component } from 'react';
import axios from 'axios';
import styles from './History.css';
import Scenario from '../Scenario/Scenario.jsx';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const email = localStorage.getItem('email');
    axios
      .get("/api/scenariosDev", { params: { email } })
      .then(({ data }) => {
        this.setState({
          data: [...data],
        });
      })
      .catch(err => console.log(err));
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
              {data.map((scenario) => <Scenario key={scenario._id} scenario={scenario} />)}
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <h2>You have no commute history saved.</h2>
          </div>
        );
      }
    } else {
      return null;
    }
  }
}

export default History;
