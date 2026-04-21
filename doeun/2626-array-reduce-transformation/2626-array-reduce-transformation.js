/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function (nums, fn, init) {
    for (i = 0; i < nums.length; i++) {
        const add = fn(init, nums[i])
        init = + add
    }
    return init
};