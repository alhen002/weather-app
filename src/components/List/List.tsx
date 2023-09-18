import ListItem from "../ListItem/ListItem";
import React from "react";
import { Weather, Activity } from "../../types/types";
import Paragraph from "../Paragraph/Paragraph";

interface ListProps {
  activities: Activity[] | undefined;
  weather: Weather | undefined;
  onDeleteActivity: (id: string) => void;
}

export default function List({
  activities,
  weather,
  onDeleteActivity,
}: ListProps) {
  return (
    <div>
      <Paragraph className="subtitle">
        {weather?.isGoodWeather
          ? "Pack your Stuff. It's good weather!"
          : "Bad Weather. Time for indoor activities!"}
      </Paragraph>
      <ul className="list">
        {activities?.map((activity) => (
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
