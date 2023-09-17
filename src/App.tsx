// util imports
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import { uid } from "uid";
import { fetchWeather } from "./utils/weatherApi";
import React from "react";

// import components
import Form from "./components/Form";
import List from "./components/List";
import Heading from "./components/Heading";
import { Weather, Activity } from "./types/types";

export default function App() {
  // localStorage
  const [activities, setActivities] = useLocalStorageState<Activity[]>(
    "activities",
    {}
  );

  // states
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  // computed properties
  const filteredActivities = activities?.filter(
    (activity) => activity?.isForGoodWeather === weather?.isGoodWeather
  );

  // handlers
  async function handleFetchWeather() {
    setIsLoading(true);
    setError(null);
    const { condition, location, isGoodWeather, temperature }: Weather | Error =
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

  function handleAddActivity(activity: Activity) {
    setActivities((prev) => [...prev, { id: uid(), ...activity }]);
  }

  function handleDeleteActivity(id) {
    activities &&
      setActivities(activities.filter((activity) => activity.id !== id));
  }

  // useEffect with Interval Fetch
  useEffect(() => {
    const intervalID = setInterval(() => {
      handleFetchWeather();
    }, 5000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="App">
      {isLoading && <p>loading....</p>}
      {error && <p>{error.message}</p>}
      {weather ? (
        <Heading>{`${weather?.condition} - ${weather?.temperature} `}</Heading>
      ) : (
        ""
      )}
      <List
        weather={weather}
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
