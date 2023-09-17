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
import { Weather, Activity, WeatherResponse } from "./types/types";

export default function App() {
  // localStorage
  const [activities, setActivities] = useLocalStorageState<Activity[]>(
    "activities",
    {}
  );

  // states
  const [weather, setWeather] = useState<Weather | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  // computed properties

  const filteredActivities: Activity[] | undefined = activities?.filter(
    (activity) => activity?.isForGoodWeather === weather?.isGoodWeather
  );

  // handlers
  async function handleFetchWeather() {
    setIsLoading(true);
    setError("");
    const {
      condition,
      location,
      isGoodWeather,
      temperature,
      error,
    }: WeatherResponse = await fetchWeather();

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

  function handleAddActivity(activity: Omit<Activity, "id">) {
    // has all the properties of Activity except id
    if (activities) {
      setActivities([...activities, { id: uid(), ...activity }]);
    }
  }

  function handleDeleteActivity(id: string) {
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
      {error && <p>{error}</p>}
      {weather ? (
        <Heading>{`${weather?.condition} - ${weather?.temperature} `}</Heading>
      ) : (
        ""
      )}
      <List
        weather={weather}
        activities={filteredActivities ? filteredActivities : activities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
