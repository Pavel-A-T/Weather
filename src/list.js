// Ограничение количества показываемых городов
export const constrainCount = 10;
// ключ ЛокалСторедж
const KEY = "cities";
// Данные по городам
const list = [];

export function checkList() {
  while (list.length > constrainCount) {
    const p = document.getElementById(list.shift());
    p.parentElement.innerHTML = "";
  }
}

// Сохраняю названия городов в localStorage
export function saveList(nameCities) {
  localStorage.setItem(KEY, JSON.stringify(nameCities));
}

export function addCityName(city) {
  list.push(city);
  checkList();
  saveList(list);
}

// Читаю названия городов сохраненных в localStorage
export function readList() {
  const nameCities = JSON.parse(localStorage.getItem(KEY));
  if (nameCities === null) {
    return [];
  }
  return nameCities;
}

export function notInclud(city) {
  return document.getElementById(city) === null;
}
