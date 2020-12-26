import { readList, saveList } from "../src/list";

const key = "cities";
const data = ["Stupino", "moscow", "new york"];

afterEach(() => {
  jest.clearAllMocks();
});

test("it should check user history", () => {
  jest.spyOn(window.localStorage, "getItem");
  window.localStorage.setItem = jest.fn();
  readList();
  expect(localStorage.getItem).toHaveBeenCalledWith(key);
});

test("it should save new cities in localstoradge", () => {
  jest.spyOn(window.localStorage, "setItem");
  window.localStorage.setItem = jest.fn();
  saveList(data);
  expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(data));
});
