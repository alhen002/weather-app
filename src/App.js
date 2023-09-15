import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import { uid } from "uid";
import { fetchWeather } from "./utils/weatherApi";
// import components
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [error, setIsError] = useState();

  useEffect(() => {
    fetchWeather();
  }, []);
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );

  function handleAddActivity(activity) {
    setActivities((prev) => [...prev, { id: uid(), ...activity }]);
  }

  return (
    <div className="App">
      <List activities={filteredActivities} />
      <Form isGoodWeather={weather} onAddActivity={handleAddActivity} />
    </div>
  );
}
