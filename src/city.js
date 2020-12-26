const geo = "https://get.geojs.io/v1/ip/geo.json";

// Получить название своего города с помощью API
export async function getCity() {
  const response = await fetch(geo);
  const data = await response.json();
  return data.city;
}
