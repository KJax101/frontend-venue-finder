import React from 'react';
import { shallow } from 'enzyme';
import "../../setupTests"
import {Query} from './Query';

describe('<Query />', () => {
  it('Renders without crashing', () => {
    shallow(<Query/>);
  });
});

describe('<Query /> props', () => {
  it('default state should render search', () => {
    expect(
    	shallow(<Query/>)
    	.find(".select-radius")
    	.props()
    	.value
    	).toEqual("5")
    });
})