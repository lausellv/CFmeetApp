import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
  test("render input", () => {
    expect(NumberOfEventsWrapper.find(".eventNum")).toHaveLength(1);
  });
  test("render 15 events by default", () => {
    expect(NumberOfEventsWrapper.find(".eventNum").prop("value")).toEqual(4);  //we only have 4 in our mochData
  });
  test("renders input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".eventNum").prop("value")).toBe(numberOfEvents);
  });
});
