import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';
import Textarea from './Textarea.js';
import Title from './Title.js';
import Radio from './Radio.js';
import Select from './Select.js';
import Password from './Password.js';

class GenericForm extends Component {

    render() {

        let childNodes = [];

        let fields = this.props.fields;

        fields.forEach(function (el, i) {

            let obj = {
                ...el, key: i
            }

            switch (el.type) {
                case "text":
                    childNodes.push(<Input {...obj} />)
                    break;
                case "password":
                    childNodes.push(<Password {...obj} />)
                    break;
                case "textarea":
                    childNodes.push(<Textarea {...obj} />)
                    break;
                case "radio":
                    childNodes.push(<Radio {...obj} />)
                    break;
                case "select":
                    childNodes.push(<Select {...obj} />)
                    break;
                default:
                    childNodes.push(<input {...obj} />)
            }
        }, this)

        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <Title title={this.props.title} />
                    {childNodes}
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}


export default GenericForm;