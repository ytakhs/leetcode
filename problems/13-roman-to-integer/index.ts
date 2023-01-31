export function romanToInt(s: string): number {
  let result = 0;
  let state: "start" | "I" | "V" | "X" | "L" | "C" | "D" | "M" = "start";

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        result += 1;
        state = "I";
        break;
      case "V":
        result += state === "I" ? 3 : 5;
        state = "V";
        break;
      case "X":
        result += state === "I" ? 8 : 10;
        state = "X";
        break;
      case "L":
        result += state === "X" ? 30 : 50;
        state = "L";
        break;
      case "C":
        result += state === "X" ? 80 : 100;
        state = "C";
        break;
      case "D":
        result += state === "C" ? 300 : 500;
        state = "D";
        break;
      case "M":
        result += state === "C" ? 800 : 1000;
        state = "M";
        break;
      default:
        throw new Error("unexpected token error");
    }
  }

  return result;
}
