const location = "Buenos Aires,ar";

const api_key = "bf6258d7d5e821e458a2dbc31bc2a043";
const api_base_url = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${api_base_url}?q=${location}&appid=${api_key}`;