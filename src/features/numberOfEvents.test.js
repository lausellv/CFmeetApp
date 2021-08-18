import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/numberOfEvents.feature");

defineFeature(feature, test => {
  let AppWrapper;

  test("User has NOT indicated a number of events to display. Default number of events will be displayed.", ({
    given,
    when,
    then
  }) => {
    given(
      "user hasn't indicated a number of events, default number of event is provided",
      () => {}
    );

    when("user opens event list", () => {
      AppWrapper = mount(<App />);
    });

    then("event default number should be displayed.", () => {
      expect(AppWrapper.state("events").length).toBe(mockData.length);
    });
  });

  test("User can change the quantity of events to be displayed.", ({ given, when, then }) => {
    given("events have loaded", () => {
      AppWrapper = mount(<App />);
    });

    when("user changes the number of events to be displayed", () => {
      AppWrapper.find(".eventNum").simulate("change", { target: { value: "2" } });
    });

    then("online the number of events specified by the user is shown.", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event").hostNodes()).toHaveLength(2);
    });
  });
});
