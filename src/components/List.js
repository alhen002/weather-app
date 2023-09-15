import ListItem from "./ListItem";

export default function List({ activities, weather }) {
  return (
    <div>
      <h2>
        {weather?.isGoodWeather
          ? "Activities for really good weather"
          : "Weather is shitty. stay inside and enjoy xbox gold"}
      </h2>
      <ul>
        {activities.map((activity) => (
          <ListItem key={activity.id} activity={activity} />
        ))}
      </ul>
    </div>
  );
}
