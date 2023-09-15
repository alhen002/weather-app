import { Fragment } from "react";

// Importing components
import Heading from "./Heading";

export default function Form({ onAddActivity }) {
  return (
    <Fragment>
      <Heading>This is a weater app</Heading>
      <form>
        <fieldset>
          <legend>Add a new Activity</legend>
          <label id="activityLabel" hmtlfor="activityName">
            Name
          </label>
          <input
            name="activityName"
            type="text"
            id="activityName"
            placeholder="mountaineering"
            aria-labelledby="activityLabel"
          />
          <label id="goodWeatherLabel" hmtlfor="goodWeatherActivity">
            Good-weather activity:
          </label>
          <input
            name="goodWeatherActivity"
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
