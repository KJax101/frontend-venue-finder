import React from 'react';
import { shallow, mount } from 'enzyme';
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

describe("<Results /> callbacks", () => {
	it("Should fire the fetchHours callback when the view hours button is clicked", () => {
		const fetchHours = jest.fn(); 
		const results = [{
			name: 'lorem', 
			vicinity: '10', 
			icon: 'http://lorem.com'
		}] 
		const hours = ["8"]
		const wrapper = mount(<Results fetchHours={fetchHours} results={results} hours={hours}/>);

		wrapper.find("button.view-hours-btn").first().simulate("click");
		expect(fetchHours).toHaveBeenCalled();
	});
});
