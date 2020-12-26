import { getCarte, map } from "./map";
import { getWeather, showWeather } from "./weather";
import { notInclud, addCityName, readList } from "./list";

// функция отработает при запуске программы
export async function start(el) {
  let element = el;
  if (!el) {
    element = document.querySelector("#weather");
  }
  const p = document.createElement("p");
  element.appendChild(p);
  const list = readList();
  // если хранилеще названий городов пусто
  if (list.length === 0) {
    const w = await getWeather();
    showWeather(p, w);
    addCityName(w.name);
    getCarte(w.name, map);
  } else {
    for (let i = 0; i < list.length; i += 1) {
      const paragraphElement = document.createElement("p");
      el.appendChild(paragraphElement);
      const weath = getWeather(list[i]);
      showWeather(p, weath);
      addCityName(list[i]);
      if (i === 0) {
        getCarte(list[i], map);
      }
    }
  }
}

export async function createForm(el) {
  let element = el;
  if (!el) {
    // Получаем указатели на нужные элементы
    element = document.querySelector("form");
  } else {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const but = document.createElement("button");
    element.appendChild(form);
    element.appendChild(input);
    element.appendChild(but);
  }

  element.addEventListener("submit", async (ev) => {
    // чтобы не перезагружать страницу
    ev.preventDefault();

    // читаем значение из формы
    const formElement = ev.target;
    const inputEl = formElement.querySelector("input");
    const cityName = inputEl.value;
    inputEl.value = "";

    const weather = await getWeather(cityName);

    if (notInclud(weather.name)) {
      const p = document.createElement("p");
      const right = document.querySelector("#weather");
      right.appendChild(p);
      showWeather(p, weather);
      addCityName(weather.name);
      await getCarte(cityName, map);
    }
  });
}
