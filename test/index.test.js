import { start, createForm } from "../src/index";

describe("start", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
  });

  it("creates basic markup", () => {
    start(el);

    const p = el.querySelector("p");
    expect(p).not.toBe(null);
  });
});

describe("createForm", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
  });

  it("creates basic markup", () => {
    createForm(el);

    const form = el.querySelector("form");
    const inp = el.querySelector("input");
    const but = el.querySelector("button");
    expect(form).not.toBe(null);
    expect(inp).not.toBe(null);
    expect(but).not.toBe(null);
  });
});
