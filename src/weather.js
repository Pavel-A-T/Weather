import { getCity } from "./city";
import { getCarte, map } from "./map";

const APP_ID = "3d7e5dd23f071a0817cd69828787d068";

// Получить данные о погоде в city в виде json
export async function getWeather(city) {
  let cityName = city;
  if (cityName === null || cityName === undefined) {
    cityName = await getCity();
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${APP_ID}`;
  const response = fetch(url);
  return (await response).json();
}

// Добавить событие onClick на строку с названием города
export function setEventToList(element, city) {
  element.addEventListener("click", async () => {
    getCarte(city, map);
  });
}

// Добавить имя города weatherInfo.name в list и отрисовать название города, температуру и иконку
export async function showWeather(el, weatherInfo) {
  const {name} = weatherInfo;
  const div = document.createElement("div");
  el.appendChild(div);
  const p = document.createElement("p");
  p.id = `${name}`;
  p.classList.add("city");
  p.innerText = `${name}`;
  setEventToList(p, name);
  div.appendChild(p);
  const paragr = document.createElement("p");
  paragr.innerHTML = `${weatherInfo.main.temp}<p>
<img src=http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png></p>`;
  div.appendChild(paragr);
}
