import { Fragment } from "react";
import React from "react";
import { useRef } from "react";
// Importing components
import Heading from "../Heading/Heading";
import { Activity } from "../../types/types";

interface FormProps {
  onAddActivity: (activity: Omit<Activity, "id">) => void;
}

export default function Form({ onAddActivity }: FormProps) {
  const nameRef = useRef<HTMLInputElement>(null);

  //handlers
  function handleAddActivity(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);

    const name = form.get("name") as string;
    const isForGoodWeather = form.get("isForGoodWeather") ? true : false;

    const newData = {
      name,
      isForGoodWeather,
    };

    onAddActivity(newData);
    (event.target as HTMLFormElement).reset();

    nameRef.current?.focus();
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleAddActivity}>
        <fieldset className="form__fieldset">
          <legend className="form__subtitle">Add a new Activity</legend>
          <label
            className="form__label"
            id="activityLabel"
            htmlFor="activityName"
          >
            Name
          </label>
          <input
            ref={nameRef}
            name="name"
            type="text"
            id="activityName"
            placeholder="mountaineering"
            aria-labelledby="activityLabel"
          />
          <label
            className="form__label"
            id="goodWeatherLabel"
            htmlFor="goodWeatherActivity"
          >
            Good-weather activity:
          </label>
          <input
            name="isForGoodWeather"
            id="goodWeatherActivity"
            type="checkbox"
            aria-labelledby="goodWeatherLabel"
          />
        </fieldset>
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
