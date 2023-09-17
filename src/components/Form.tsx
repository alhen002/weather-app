import { Fragment } from "react";
import React from "react";
// Importing components
import Heading from "./Heading";
import { Activity } from "../types/types";

interface FormProps {
  onAddActivity: (activity: Omit<Activity, "id">) => void;
}

export default function Form({ onAddActivity }: FormProps) {
  function handleAddActivity(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      isForGoodWeather: { checked: boolean };
    };
    const form = new FormData(target);

    if (target) {
      const newData = {
        name: form.get("name"),
        isForGoodWeather: form.get("isForGoodWeather") ? true : false,
      };
      onAddActivity(newData);

      form.reset();
      form.name.focus();
    }
  }

  return (
    <Fragment>
      <Heading>This is a weater app</Heading>
      <form onSubmit={handleAddActivity}>
        <fieldset>
          <legend>Add a new Activity</legend>
          <label id="activityLabel" htmlFor="activityName">
            Name
          </label>
          <input
            name="name"
            type="text"
            id="activityName"
            placeholder="mountaineering"
            aria-labelledby="activityLabel"
          />
          <label id="goodWeatherLabel" htmlFor="goodWeatherActivity">
            Good-weather activity:
          </label>
          <input
            name="isForGoodWeather"
            id="goodWeatherActivity"
            type="checkbox"
            aria-labelledby="goodWeatherLabel"
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
}
