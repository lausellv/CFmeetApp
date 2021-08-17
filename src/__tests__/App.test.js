import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import EventList from "../EventList.js";
import CitySearch from "../CitySearch.js";
import NumberOfEvents from "../NumberOfEvents";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test("render number of events", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  test(" renders non-empty component without crashing", () => {
    expect(AppWrapper.exists()).toBe(true);  /// assertions in Jest expect().
  });
});
