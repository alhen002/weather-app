import ListItem from "./ListItem";

export default function List({ activities }) {
  return (
    <div>
      <ul>
        {activities.map((activity) => (
          <ListItem key={activity.id} activity={activity} />
        ))}
      </ul>
    </div>
  );
}
