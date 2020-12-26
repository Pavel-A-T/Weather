import { getWeather, showWeather } from "../src/weather";

const data = {
  coord: { lon: 38.07, lat: 54.9 },
  weather: [
    { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" },
  ],
  base: "stations",
  main: {
    temp: -6.22,
    feels_like: -13.42,
    temp_min: -7.22,
    temp_max: -5,
    pressure: 1020,
    humidity: 79,
  },
  visibility: 10000,
  wind: { speed: 6, deg: 180 },
  clouds: { all: 90 },
  dt: 1608734243,
  sys: {
    type: 1,
    id: 9021,
    country: "RU",
    sunrise: 1608702674,
    sunset: 1608728549,
  },
  timezone: 10800,
  id: 486968,
  name: "Stupino",
  cod: 200,
};

describe("getWeather", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  );
  it("returns weather info", async () => {
    const result = await getWeather("Stupino");
    expect(result.main.temp).toEqual(-6.22);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe("showWeather", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
  });

  it("returns basic markup", () => {
    showWeather(el, data);

    const p = el.querySelector("p");
    const img = el.querySelector("img");

    expect(p).not.toBe(null);
    expect(p.innerText).not.toBe("");

    expect(img).not.toBe(null);
    expect(img.src).not.toBe("");
  });
});
