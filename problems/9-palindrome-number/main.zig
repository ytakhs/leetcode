const std = @import("std");

fn isPalindrome(x: i32) bool {
    if (x < 0 or (x != 0 and @rem(x, 10) == 0)) {
        return false;
    }

    var v = x;
    var c: i32 = 0;

    while (c < v) {
        c = c * 10 + @rem(v, 10);
        v = @divTrunc(v, 10);
    }

    return c == v or @divTrunc(c, 10) == v;
}

test {
    try std.testing.expectEqual(true, isPalindrome(121));
    try std.testing.expectEqual(false, isPalindrome(-121));
    try std.testing.expectEqual(false, isPalindrome(10));
    try std.testing.expectEqual(true, isPalindrome(111121111));
}
