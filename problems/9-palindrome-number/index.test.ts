import { describe, expect, test } from "bun:test";
import { isPalindrome } from "./index.js";

describe("isPalindrome", () => {
  test("1", () => {
    expect(isPalindrome(121)).toBe(true);
  });
  test("2", () => {
    expect(isPalindrome(-121)).toBe(false);
  });
  test("3", () => {
    expect(isPalindrome(10)).toBe(false);
  });
  test("4", () => {
    expect(isPalindrome(111121111)).toBe(true);
  });
});
