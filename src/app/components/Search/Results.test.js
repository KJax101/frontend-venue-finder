import React from 'react';
import { shallow } from 'enzyme';
import "../../setupTests"
import {Results} from './Results';

describe('<Results />', () => {
  it('Renders without crashing', () => {
    shallow(<Results/>);
  });
});

describe('<Results /> props', () => {
	let place = {
		name: "Rand", 
		vicinity: "30mi",
		icon: "pictureimgtag",
		reference: "idunno"
	}
let hour = "3pm - 4pm"

  it('renders results and hours props', () => {
    expect(
    	shallow(<Results results={[place]} hours={[hour]}/>)
    	.find(".list-group-item")
    	.length
    	).toEqual(8)
    });
});

// describe('<Results /> props', () => {
//   it('testing expect', () => {
//     expect(
//     	shallow(<Results results=[]/>)
//     	.find("")
//     	.text()
//     	.toEqual("")
//     	)
//     });
// });