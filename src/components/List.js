import ListItem from "./ListItem";

export default function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ListItem activity={activity} />
      ))}
    </ul>
  );
}
