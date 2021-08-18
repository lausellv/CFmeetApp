import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount, shallow } from "enzyme";
import App from "../App";
import Event from '../Event';
import { mockData } from "../mock-data";


const feature = loadFeature("./src/features/showOrHideEventDetails.feature");


defineFeature(feature, test => {

let EventWrapper, AppWrapper;


  test("By default, event details are not displayed", ({ given, when, then }) => {
    given("event details are not displayed by default,", () => {




    });

    when("user opens application", () => {
AppWrapper = mount(<App />);
      
    });

    then("a list of events without details should be displayed", () => {
      AppWrapper.update();
      expect( AppWrapper.find(".description")).toHaveLength(0);
    });
  });




  test("User can find out more details about an event", ({ given, when, then }) => {
    given("events have loaded", () => {
      
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when("user clicks on an event", () => {
      EventWrapper.find(".showMore").simulate("click");

    });

    then("user should see complete event details", () => {
      expect(EventWrapper.find(".details")).toHaveLength(1);
    });
  });



  test("User can hide event details", ({ given, when, then }) => {
    given("details of an events are displayed", () => {

      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({
        show: true,
      });
    });

    when("the user clicks on such event", () => {

      EventWrapper.find(".showLess").simulate("click");
    });

    then("the user should no longer see full event details", () => {
      expect(EventWrapper.find(".details")).toHaveLength(0);

    });
  });
});
