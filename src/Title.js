import React, { Component } from 'react';
import './App.css';

class Title extends Component {
    render() {

        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}

export default Title;