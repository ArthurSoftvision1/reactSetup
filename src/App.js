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
        { label: 'Email', name: 'email', type: 'text', placeholder: 'Insert an e-mail', validations: [] },
        { label: 'Password', name: 'password', type: 'password', value: 'password', placeholder: 'Insert a password' },
        { label: 'Comments', name: 'comments', type: 'textarea', value: 'val', placeholder: 'Add a comment' },
        { label: 'Select', name: 'select', type: 'select', options: [
          'Volvo', 
          'Saab', 
          'Opel', 
          'Audi', 
          'Bmw', 
          'Mercedes'
        ] },
        {
          label: 'Gender', name: 'gender', type: 'radio', validations: [], options: [
            { id: 'male', name: 'male', value: 'male', label: 'Male', selected: true },
            { id: 'female', name: 'female', value: 'female', label: 'Female' },
            { id: 'other', name: 'other', value: 'other', label: 'Other' }
          ] 
        }
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
