import { describe, expect, test } from "bun:test";
import { romanToInt } from "./index.js";

describe("romanToInt", () => {
  test("1", () => {
    expect(romanToInt("III")).toBe(3);
  });

  test("2", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  test("3", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
