import React, { Component } from 'react';
import './App.css';
import CustomInput from './CustomInput.js';
import CustomTextarea from './CustomTextarea.js';
import CustomRadio from './CustomRadio.js';
import CustomSelect from './CustomSelect.js';
import CustomPassword from './CustomPassword.js';

class GenericForm extends Component {

  render() {
    let childNodes = [];
    let fields = this.props.fields;

    fields.forEach(function (el, i) {

      let obj = {
        ...el, key: i
      }

      switch (el.type) {
        case "text":
          childNodes.push(<CustomInput {...obj} />)
          break;
        case "password":
          childNodes.push(<CustomPassword {...obj} />)
          break;
        case "textarea":
          childNodes.push(<CustomTextarea {...obj} />)
          break;
        case "radio":
          childNodes.push(<CustomRadio {...obj} />)
          break;
        case "select":
          childNodes.push(<CustomSelect {...obj} />)
          break;
        default:
          childNodes.push(<CustomInput {...obj} />)
      }
    }, this)

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
