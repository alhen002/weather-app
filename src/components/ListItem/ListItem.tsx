import React from "react";
import { Activity } from "../../types/types";
interface ListItemProps {
  activity: Activity;
  onDeleteActivity: (id: string) => void;
}
export default function ListItem({
  activity,
  onDeleteActivity,
}: ListItemProps) {
  return (
    <li className="list__item">
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
