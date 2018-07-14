import React from "react"
import {shallow} from "enzyme"
import "../setupTests"
import Main from "./Main"
// smoke test for main component
describe("Main", ()=>{
	it("should render without crashing", ()=>{
		shallow(<Main/>)
	})
})

describe('<Main /> props', () => {
  it('default state should render search', () => {
    expect(
    	shallow(<Main/>)
    	.find(".search")
    	.length
    	).toEqual(1)
    });
})