import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';

class Form extends Component {
  constructor (props) { // initialize the initial state in the constructor
    super(props);
    this.state = {
      email: '', // empty string
      password: '', // empty string
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => { // handle input state
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); // checks if the e-mail is matching the REGEX
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6; // checks if password is longer than 6 characters
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors, // set state for the form
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid}); // set state for the form if email and password are valid
  }

  errorClass(error) { // apply bootstrap error if error exists
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm">
        <h2>Basic Form</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}> 

          <label htmlFor="email">Email address</label>

          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email} // get initial email state value
            onChange={this.handleUserInput} />

        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>

          <label htmlFor="password">Password</label>

          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password} // get initial password state value
            onChange={this.handleUserInput} />

        </div>

        <select class="select-list">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
          <option value="bmw">Bmw</option>
          <option value="mercedes">Mercedes</option>
        </select> <br/>

        <label class="radio-inline">
          <input type="radio" name="first"/>Option 1
        </label>

        <label class="radio-inline">
          <input type="radio" name="second"/>Option 2
        </label>

        <label class="radio-inline">
          <input type="radio" name="third"/>Option 3
        </label>

        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea class="form-control" rows="4" id="comment" textarea="textarea"></textarea>
        </div>

        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
      </form>
    )
  }
}

export default Form;
