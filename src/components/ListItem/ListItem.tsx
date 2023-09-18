import React from "react";
import { Activity } from "../../types/types";
import Paragraph from "../Paragraph/Paragraph";
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
      <Paragraph>{activity.name}</Paragraph>
      <button
        className="list__item__button"
        onClick={() => {
          onDeleteActivity(activity.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
