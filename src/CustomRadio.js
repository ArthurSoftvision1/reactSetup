import React, { Component } from 'react';
import './App.css';

class CustomRadio extends Component {
  render() {
    let valueNodes = [];
    let value = this.props.value;

    value.forEach(function (el, i) {
      
    
    }, this)


    return (
      <div className="form-group">
        <input type={this.props.type} name={this.props.name} value={this.props.value}/> Male
        <input type={this.props.type} name={this.props.name} value={this.props.value} /> Female
        <input type={this.props.type} name={this.props.name} value={this.props.value} /> Other
      </div>
    );
  }
}

export default CustomRadio;
