import React, { Component } from 'react';
import logo from './logo.svg';
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
        { name: 'gender', type: 'radio', value: 'val' },
        { name: 'select', type: 'select', value: 'val' },
      ],
      onSubmit: this.customHandleSubmit
    }

    return (
      <div className="main-app">
        <header className="header-section">
          <img src={logo} className="logo-image" alt="logo" />
          <h1 className="title">Welcome to React!!!</h1>
        </header>
        <GenericForm {...myFields} />
      </div>
    );
  }
}

export default App;
