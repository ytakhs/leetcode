export function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let c = x;
  let val = 0;

  while (c > 0) {
    const v = c % 10;

    c = Math.floor(c / 10);
    val = val * 10 + v;
  }

  return val === x;
}
