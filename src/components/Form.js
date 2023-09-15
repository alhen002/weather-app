import { Fragment } from "react";

// Importing components
import Heading from "./Heading";

export default function Form({ onAddActivity }) {
  function addActivity(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    const newData = {
      name: form.get("name"),
      isForGoodWeather: form.get("isForGoodWeather") ? true : false,
    };

    onAddActivity(newData);
    event.target.reset();
    event.target.name.focus();
  }

  return (
    <Fragment>
      <Heading>This is a weater app</Heading>
      <form onSubmit={addActivity}>
        <fieldset>
          <legend>Add a new Activity</legend>
          <label id="activityLabel" hmtlfor="activityName">
            Name
          </label>
          <input
            name="name"
            type="text"
            id="activityName"
            placeholder="mountaineering"
            aria-labelledby="activityLabel"
          />
          <label id="goodWeatherLabel" hmtlfor="goodWeatherActivity">
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
