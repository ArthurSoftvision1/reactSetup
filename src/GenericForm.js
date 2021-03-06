import React, { Component } from 'react';
import './App.css';
import CustomInput from './CustomInput.js';
import CustomTextarea from './CustomTextarea.js';
import CustomRadio from './CustomRadio.js';
import CustomSelect from './CustomSelect.js';
import CustomPassword from './CustomPassword.js';

class GenericForm extends Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    let childrenObj = {};
    this.props.fields.forEach(function (el, i) {
      let obj = { ...el, key: el.name };
      childrenObj[el.name] = obj;
    });
    this.state = {
      isValid: false,
      isComplete: false,
      fields: childrenObj
    };
  }

  handleFieldChange(field, newValue) {
    console.log("We are updating '"+ field + "' with: '"+ newValue);
    let updatedFields = this.state.fields;

    if (field === 'gender') {
      
      for (let i = 0; i < updatedFields.gender.options.length; i++) {
        let radioOption = updatedFields.gender.options[i];
        if (radioOption.value === newValue) {         
          radioOption.selected = true;
        } else {
          radioOption.selected = false;
        }
      }

      this.setState({ fields: updatedFields });      

    } else {
      updatedFields[field].value = newValue;
      this.setState({ fields: updatedFields });
    }
  }

  render() {
    let childNodes = [];
    let fields = this.state.fields;
    for (var key in fields) {
       if (fields.hasOwnProperty(key)) {
          let el = fields[key];
          switch (el.type) {
            case "text":
              childNodes.push(<CustomInput {...el} onChange={this.handleFieldChange} />)
              break;
            case "password":
              childNodes.push(<CustomPassword {...el} onChange={this.handleFieldChange} />)
              break;
            case "textarea":
              childNodes.push(<CustomTextarea {...el} onChange={this.handleFieldChange} />)
              break;
            case "radio":              
              childNodes.push(<CustomRadio {...el} onChange={this.handleFieldChange} />)
              break;
            case "select":
              childNodes.push(<CustomSelect {...el} onChange={this.handleFieldChange} />)
              break;
            default:
              childNodes.push(<CustomInput {...el} onChange={this.handleFieldChange} />)
          }
       }
    }

    return (
      <div className="form-container">
        <form onSubmit={this.props.onSubmit}>
          <h2 className="form-title">{this.props.title}</h2>
          {childNodes}
          <button className="submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default GenericForm;
