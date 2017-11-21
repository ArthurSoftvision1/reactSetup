import React, { Component } from 'react';
import './App.css';

class Radio extends Component {
    render() {

        return (
            <div className="form-group">
                <input type={this.props.type} name={this.props.name} value="male" /> Male
                <input type={this.props.type} name={this.props.name} value="female" /> Female
                <input type={this.props.type} name={this.props.name} value="other" /> Other
            </div>
        );
    }
}

export default Radio;