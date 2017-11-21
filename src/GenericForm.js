import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';
import TextareaComponent from './Input.js';
import Title from './Title.js';

class GenericForm extends Component {

    handleSubmit(e) {
        e.preventDefault();
    }

  render() {

    let myFields = {
        title: 'Register Form',
        fields: [
            { name:'', type: 'text', value: 'val', validations: [] }
        ],
      
        onSubmit: 'handleSubmit'
      }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <Title title={myFields.title}/>
            <Input name={myFields.name} type={myFields.type} value={this.value}/>
            <button>Submit</button>
        </form>
      </div>
    );
  }
}


export default GenericForm;