import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import { uid } from "uid";
import { fetchWeather } from "./utils/weatherApi";
// import components
import Form from "./components/Form";
import List from "./components/List";
import Heading from "./components/Heading";
export default function App() {
  // localStorage
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  // states
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // computed properties

  const filteredActivities = activities?.filter(
    (activity) => activity.isForGoodWeather === weather?.isGoodWeather
  );

  // handlers
  async function handleFetchWeather() {
    setIsLoading(true);
    setError(null);
    const { condition, isGoodWeather, location, temperature, error } =
      await fetchWeather();

    if (error) {
      setError(error.message);
    } else {
      setWeather({
        condition,
        isGoodWeather,
        location,
        temperature,
      });
    }
    setIsLoading(false);
  }

  function handleAddActivity(activity) {
    setActivities((prev) => [...prev, { id: uid(), ...activity }]);
  }

  // useEffect
  useEffect(() => {
    handleFetchWeather();
  }, []);

  return (
    <div className="App">
      {weather ? (
        <Heading>{`${weather?.condition} - ${weather.temperature} `}</Heading>
      ) : (
        ""
      )}
      <List weather={weather} activities={filteredActivities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
