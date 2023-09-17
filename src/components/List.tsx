import ListItem from "./ListItem";
import React from "react";
import { Weather, Activity } from "../types/types";

interface ListProps {
  activities: Activity[];
  weather: Weather;
  onDeleteActivity: () => void;
}

export default function List({
  activities,
  weather,
  onDeleteActivity,
}: ListProps) {
  return (
    <div>
      <h2>
        {weather?.isGoodWeather
          ? "Activities for really good weather"
          : "Weather is shitty. stay inside and enjoy xbox gold"}
      </h2>
      <ul>
        {activities.map((activity) => (
          <ListItem
            key={activity.id}
            activity={activity}
            onDeleteActivity={onDeleteActivity}
          />
        ))}
      </ul>
    </div>
  );
}
