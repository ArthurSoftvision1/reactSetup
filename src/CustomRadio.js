import React, { Component } from 'react';
import './App.css';
import CustomInput from './CustomInput';

class CustomRadio extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let field = event.target;
    this.props.onChange(field.name, field.value);
  }

  render() {
    let valueNodes = [];
    let value = this.props.options;

    for (let i = 0; i < value.length; i++) {

      let el = value[i];

      let obj = {
        ...el, key: i, type: this.props.type, name: this.props.name, checked: el.selected
      }
      
      let node = <CustomInput {...obj} onChange={this.props.onChange}/>
      
      valueNodes.push(node);
    }

    return (
      <div className="form-group" id="radio-buttons">
        <div><h4>{this.props.label}</h4></div>
        {valueNodes}
      </div>
    );
  }
}

export default CustomRadio;
