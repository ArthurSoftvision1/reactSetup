import React, { Component } from 'react';
import './App.css';
import GenericForm from './GenericForm.js';

class App extends Component {
  customHandleSubmit(e) {
    e.preventDefault();
    console.log('test');
  }

  render() {
    let myFields = {
      title: 'Register Form',
      fields: [
        { name: 'email', type: 'text', value: 'val', placeholder: 'Insert an e-mail', validations: [] },
        { name: 'password', type: 'password', value: 'password', placeholder: 'Insert a password' },
        { name: 'comments', type: 'textarea', value: 'val', placeholder: 'Add a comment' },
        { name: 'gender', type: 'radio', id: ['male', 'female', 'other'], value: ['male', 'female', 'other']},
        { name: 'select', type: 'select', value: ['volvo', 'saab', 'opel', 'audi', 'bmw', 'mercedes'] },
        { name:'Gender', type: 'radio', value: [
           { id: 'male', value: 'male', caption: 'Male', selected:true}, 
           { id: 'female', value: 'female', caption: 'Female'}, 
           { id: 'other', value: 'other', caption: 'Other'}], validations: [] }
      ],
     
      onSubmit: this.customHandleSubmit
    }
    return (
      <div className="main-app">
        <GenericForm {...myFields} />
      </div>
    );
  }
}

export default App;
