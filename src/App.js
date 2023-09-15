import { useState } from "react";
import { uid } from "uid";
// import components
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(activity) {
    setActivities((prev) => [...prev, { id: uid(), ...activity }]);
  }

  return (
    <div className="App">
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
