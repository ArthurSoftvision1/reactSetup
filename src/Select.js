import React, { Component } from 'react';
import './App.css';

class Select extends Component {
    render() {

        return (
            <div className="form-group">
                <select name={this.props.name} type={this.props.type} className="select-list">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                    <option value="bmw">Bmw</option>
                    <option value="mercedes">Mercedes</option>
                </select>
            </div>
        );
    }
}

export default Select;

