import React, { Component } from 'react';
import './App.css';

class CustomTextarea extends Component {
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
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <textarea name={this.props.name} rows="4" onChange={this.onChange} id="comment" type={this.props.type} placeholder={this.props.placeholder}></textarea>
      </div>
    );
  }
}

export default CustomTextarea;
