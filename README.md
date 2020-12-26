# weather

Приложение показывает погоду в выбранном городе по его названию

![PR Sanity Check](https://github.com/Pavel-A-T/Weather/workflows/PR%20Sanity%20Check/badge.svg)
![Add codesandbox link](https://github.com/Pavel-A-T/Weather/workflows/Add%20codesandbox%20link/badge.svg)

You can type the name of the city in the input field and after you may press "get weather" button. As a result,
you will see the weather forecast and map for the selected city.
In the first time, you will see the weather forecast for your current location.
For easy of use, the last 10 searched cities are saved and you can quickly select them from the list.

All code is locsted in src folder and separeted in modules: index, city, weather, list and map.
You start in index.js you get the basic markup. Weather.js provides methods for getting and drawing a weather forecast.
List.js provides methods for reading, saving a list of cities. Map.js provides the source of the map image.
