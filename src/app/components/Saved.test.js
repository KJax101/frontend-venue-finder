import React from 'react';
import { shallow, mount } from 'enzyme';
import "../setupTests"
import {Saved} from './Saved';

const fetchSavedVenues = () => null
const deleteVenue = () => null
const fetchHours = () => null
const hourResults = ["8pm"]
const savedVenues = [] 

describe('<Saved />', () => {
  it('Renders without crashing', () => {
  	shallow(<Saved
    fetchSavedVenues={fetchSavedVenues}
		deleteVenue={deleteVenue}
		fetchHours={fetchHours}
		hourResults={hourResults}
		savedVenues={savedVenues}
    />)
  });
});

describe('<Saved /> props', () => { 
  it('default state should render results', () => { 
    expect(
    	mount(<Saved
    		fetchSavedVenues={fetchSavedVenues}
    		deleteVenue={deleteVenue}
    		fetchHours={fetchHours}
    		hourResults={hourResults}
    		savedVenues={savedVenues}
    		/>)
    	.props().hourResults[0]
    	).toEqual("8pm")
    });
})