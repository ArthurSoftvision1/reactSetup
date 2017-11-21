import React, { Component } from 'react';
import './App.css';

class Password extends Component {
    render() {

        return (
            <div>
                <label htmlFor="password">Password</label>
                <input type={this.props.type} placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default Password;