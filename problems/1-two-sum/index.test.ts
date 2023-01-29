import { describe, expect, test } from "bun:test";
import { twoSum } from "./index.js";

describe("twoSum", () => {
  test("1", () => {
    expect(JSON.stringify(twoSum([2, 7, 11, 15], 9))).toBe(
      JSON.stringify([0, 1])
    );
  });

  test("2", () => {
    expect(JSON.stringify(twoSum([3, 2, 4], 6))).toBe(JSON.stringify([1, 2]));
  });
});
