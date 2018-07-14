import React from "react";
import { shallow, mount } from "enzyme";
import "../../setupTests";
import { Query } from "./Query";

describe("<Query />", () => {
  it("Renders without crashing", () => {
    shallow(<Query />);
  });
});

describe("<Query /> props", () => {
  it("default state should render search", () => {
    expect(
      shallow(<Query />)
        .find(".select-radius")
        .props().value
    ).toEqual("5");
  });
});

describe("<Query /> callbacks", () => {
  it("Should fire the fetchVenues callback when the form is submitted", () => {
    const fetchVenues = jest.fn();
    const fakeEvent = { preventDefault: () => null };
    const wrapper = mount(<Query fetchVenues={fetchVenues} />);

    wrapper.find(".panel-body form").simulate("submit", fakeEvent);
    expect(fetchVenues).toHaveBeenCalled();
  });
});
