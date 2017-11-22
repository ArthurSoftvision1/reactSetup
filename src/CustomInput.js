import React, { Component } from 'react';
import './App.css';

class CustomInput extends Component {
  render() {
    return (
      <div>
        <label htmlFor="email">E-mail</label>
        <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default CustomInput;
