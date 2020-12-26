import { getCarte } from "../src/map";

const name = "Moscow";

describe("getCarte", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
  });

  it("returns basic markup", () => {
    getCarte(name, el);
    const img = el.querySelector("img");
    expect(img).not.toBe(null);
    expect(img.src).not.toBe("");
  });
});
