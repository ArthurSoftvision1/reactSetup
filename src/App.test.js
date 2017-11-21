import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { Enzyme } from 'enzyme';
import { Adapter } from 'enzyme-adapter-react-16';
import Form from './Form.js';

describe('<Form />', () => {
  it('Render test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
  });
});
