const URL = "https://example-apis.vercel.app/api/weather";

export async function fetchWeather() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
