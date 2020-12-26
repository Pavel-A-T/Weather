const API_KEY = "AIzaSyDW6zlQYQGTpgsfqOILRe2WkMcoOPalSEo";
const SECRET = "&GqYn2SicqAKY-1m-XXvnJbXnXHM =";

export const map = document.getElementById("left");

// Получить карту города с name = city; и отобразить ее в селекторе #left
export async function getCarte(city, el) {
  const element = el;
  const url =
    `https://maps.googleapis.com/maps/api/staticmap?center=${city}&size=500x500&key=${API_KEY}${ 
    SECRET}`;
  element.innerHTML = `<img src=${url}/>`;
}
