import React, { Component } from 'react';
import './App.css';

class CustomSelect extends Component {
  render() {
    return (
      <div className="form-group">
        <select name={this.props.name} type={this.props.type} className="select-list">
          <option value={this.props.value[0]}>Volvo</option>
          <option value={this.props.value[1]}>Saab</option>
          <option value={this.props.value[2]}>Opel</option>
          <option value={this.props.value[3]}>Audi</option>
          <option value={this.props.value[4]}>Bmw</option>
          <option value={this.props.value[5]}>Mercedes</option>
        </select>
      </div>
    );
  }
}

export default CustomSelect;
