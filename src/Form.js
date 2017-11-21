import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';
const validator = require('validator');


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      this.validateField(name, value));
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = validator.isEmail(value);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;

      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;

      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  render() {
    return (
      <form className="form-section">
        <h2>Basic Form</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>

          <label htmlFor="email">Email address</label>

          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput.bind(this)} />

        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>

          <label htmlFor="password">Password</label>

          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput.bind(this)} />

        </div>

        <select className="select-list">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
          <option value="bmw">Bmw</option>
          <option value="mercedes">Mercedes</option>
        </select> <br />

        <label className="radio-inline">
          <input type="radio" name="first" />Option 1
        </label>

        <label className="radio-inline">
          <input type="radio" name="second" />Option 2
        </label>

        <label className="radio-inline">
          <input type="radio" name="third" />Option 3
        </label>

        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea className="form-control" rows="4" id="comment" textarea="textarea"></textarea>
        </div>

        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
      </form>
    )
  }
}

export default Form;
