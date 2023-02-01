import { describe, expect, test } from "bun:test";
import { longestCommonPrefix } from "./index.js";

describe("longestCommonPrefix", () => {
  test("1", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  test("2", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  test("failed 1", () => {
    expect(longestCommonPrefix(["ab", "a"])).toBe("a");
  });

  test("failed 2", () => {
    expect(longestCommonPrefix(["c", "acc", "ccc"])).toBe("");
  });
});
