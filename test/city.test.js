import { getCity } from "../src/city";

describe("getCurrentCity", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ city: "Krakow" }),
    })
  );

  it("returns current city info", async () => {
    const city = await getCity();
    expect(city).toEqual("Krakow");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
