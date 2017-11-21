import React, { Component } from 'react';
import './App.css';

class Input extends Component {
    render() {

        return (
            <div>
                <label htmlFor="e-mail">E-mail</label>
                <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

export default Input;