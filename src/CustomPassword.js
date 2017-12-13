import React, { Component } from 'react';
import './App.css';

class CustomPassword extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let field = event.target;
    this.props.onChange(field.name, field.value);
  }

  render() {
    return (
      <div className="form-inputs">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input type={this.props.type} onChange={this.onChange} name={this.props.name} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default CustomPassword;
