import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";


const feature = loadFeature("./src/features/numberOfEvents.feature");

defineFeature(feature, test => {
  //currently, the default number of events is 15
  test("User has NOT indicated a number of events to display. Default number of events will be displayed.", ({
    given,
    when,
    then
  }) => {
    let AppWrapper;
    given("user hasn't indicated a number of events, default number of event is provided", () => {
      AppWrapper = mount(<App />);
    });

    when("user opens event list", () => {});

    then("event default number should be displayed.", () => {
      expect(AppWrapper.state("numberOfEvents")).toBe(4);
    });
  });

  test("User can change the quantity of events to be displayed.", ({ given, when, then }) => {
    let AppWrapper;
    given("events have loaded", () => {
      AppWrapper = mount(<App />);
    });

    when("user changes the number of events to be displayed", () => {
      AppWrapper.find(".eventNum").simulate("change", { target: { value: "1" } });
    });

    then("online the number of events specified by the user is shown.", () => {
      AppWrapper.update();
      expect(AppWrapper.state("numberOfEvents")).toHaveLength(1);
    });
  });
});
