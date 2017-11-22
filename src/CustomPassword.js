import React, { Component } from 'react';
import './App.css';

class CustomPassword extends Component {
  render() {
    return (
      <div>
        <label htmlFor="password">Password</label>
        <input type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default CustomPassword;
