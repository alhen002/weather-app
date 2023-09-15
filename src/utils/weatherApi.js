const URL = "https://example-apis.vercel.app/api/weather";

export async function fetchWeather() {
  try {
    const response = await fetch(URL);

    if (response.ok) {
      const data = await response.json();
      return {
        ...data,
        error: null,
      };
    }
    throw new Error("Error fetching the Weather.");
  } catch (error) {
    return {
      error,
    };
  }
}
