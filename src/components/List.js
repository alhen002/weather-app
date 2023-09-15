import ListItem from "./ListItem";
import { Fragment } from "react";
export default function List({ activities, isGoodWeather }) {
  return (
    <Fragment>
      {/* hier geht irgendwas nicht. später nochmal checken */}
      {isGoodWeather ? <h2>good weather</h2> : <h2>bad weather</h2>}
      <ul>
        {activities.map((activity) => (
          <ListItem key={activity.id} activity={activity} />
        ))}
      </ul>
    </Fragment>
  );
}
