export function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let c = x;
  let val = 0;

  while (c > 0) {
    val = val * 10 + (c % 10);
    c = Math.floor(c / 10);
  }

  return val === x;
}
