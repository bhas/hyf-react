

const API_KEY = "DEMO_KEY"; // should be replaced with your own API key
const API_BASE_URL = "https://api.nasa.gov/planetary/apod";

// Loads the photo of a specific date
export const loadNasaImage = async (date) => {
  const url = `${API_BASE_URL}?api_key=${API_KEY}&date=${date}`;
  const res = await fetch(url, { cache: "force-cache" });
  console.warn(res);
  if (!res.ok) {
    throw new Error('failed to load image data for date: ' + date);
  }
  return res.json();
}