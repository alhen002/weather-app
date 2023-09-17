export interface Activity {
  id: string;
  name: string;
  isForGoodWeather: boolean;
}

export interface Weather {
  condition: string;
  isGoodWeather: boolean;
  location: string;
  temperature: string;
}

export interface WeatherResponse extends Weather {
  error: Error | null;
}
