const std = @import("std");

pub fn twoSum(allocator: std.mem.Allocator, nums: []const i32, target: i32) ![]const usize {
    var result = std.ArrayList(usize).init(allocator);
    var m = std.AutoHashMap(i32, usize).init(std.heap.page_allocator);
    defer m.deinit();

    var i: usize = 0;
    while (i < nums.len) : (i += 1) {
        const v: i32 = target - nums[i];

        if (m.get(v)) |res| {
            try result.append(res);
            try result.append(i);

            break;
        } else {
            try m.put(nums[i], i);
        }
    }

    return result.items;
}

test "twoSum" {
    var a1 = [_]usize{ 0, 1 };
    var a2 = [_]i32{ 2, 7, 11, 15 };
    var a3 = try twoSum(std.testing.allocator, a2[0..], 9);
    try std.testing.expectEqualSlices(usize, a3, a1[0..]);
    std.testing.allocator.free(a3);

    var b1 = [_]usize{ 1, 2 };
    var b2 = [_]i32{ 3, 2, 4 };
    var b3 = try twoSum(std.testing.allocator, b2[0..], 6);
    try std.testing.expectEqualSlices(usize, b3, b1[0..]);
    std.testing.allocator.free(b3);
}
