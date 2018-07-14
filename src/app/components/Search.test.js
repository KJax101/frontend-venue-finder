import React from 'react';
import { shallow } from 'enzyme';
import "../setupTests"
import Search from './Search';

describe('<Search />', () => {
  it('Renders without crashing', () => {
    shallow(<Search/>);
  });
});

describe('<Search /> props', () => {
  it('default state should render results', () => {
    expect(
    	shallow(<Search/>)
    	.state().results
    	).toEqual("")
    });
})