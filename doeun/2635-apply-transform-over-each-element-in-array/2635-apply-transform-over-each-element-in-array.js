/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

//map을 사용하지 않고 풀기
const map = function (arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i))
    }
    return newArr
};