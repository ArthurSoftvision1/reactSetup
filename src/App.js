import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <header className="header-section">
          <img src={logo} className="logo-image" alt="logo" />
          <h1 className="title">Welcome to React!!!</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
