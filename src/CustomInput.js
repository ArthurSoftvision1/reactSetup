import React, { Component } from 'react';
import './App.css';

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event){
    let field = event.target;
    this.props.onChange(field.name,field.value);
  }

  render() {
    let labelText = this.props.type === "radio" ? this.props.label : this.props.label
    return (
      <div className="form-inputs">
        <label className="label-section" htmlFor={this.props.id}>{labelText}</label>
        <input type={this.props.type} id={this.props.id} name={this.props.name} onChange={this.onChange} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default CustomInput;
