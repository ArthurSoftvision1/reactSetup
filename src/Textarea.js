import React, { Component } from 'react';
import './App.css';


class TextareaComponent extends Component {
    render() {
  
      return (
        <div className="form-group">
            <textarea className="form-control" rows="4" id="comment" textarea="textarea"></textarea>
        </div>
      );
    }
  }
  
  export default TextareaComponent;