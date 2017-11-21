import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';
import Textarea from './Input.js';
import Title from './Title.js';


let myFields = {
    title: 'Register Form',
    fields: [
        { name:'', type: 'text', value: 'val', validations: [] }
    ],

    onSubmit: registerUser
}


class GenericForm extends Component {
constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
}
    
registerUser () {
    alert('it works!');
}

  render() {
    return (
      <div>
        <form method='post'>
            <Title data={[ myFields.title ]}/>
            <Input data={[ myFields.fields.name, myFields.fields.type, myFields.fields.value ]}/>

            <Textarea />
            <button onSubmit={this.registerUser()}> </button>
        </form>
      </div>
    );
  }
}

export default GenericForm;