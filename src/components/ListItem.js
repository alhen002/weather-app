export default function ListItem({ activity, onDeleteActivity }) {
  return (
    <li>
      <p>{activity.name}</p>
      <button
        onClick={() => {
          onDeleteActivity(activity.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
