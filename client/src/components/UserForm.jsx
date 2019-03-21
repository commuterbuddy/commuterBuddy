import React, { Component } from 'react';
import axios from 'axios';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      county: '',
      city: '',
      mpg: 0
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <form>
          <label>
            Home:
            <select type="select" name="homeCounty" />
          </label>
          <label>
            Work:
            <input type="select" name="workCounty" />
          </label>
          <label>
            Average Miles Per Gallon (MPG):
            <input type="text" name="mpg" />
          </label>
        </form>
      </div>

    )
  }
}

export default UserForm;
