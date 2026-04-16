/**
 * @param {string} s
 * @return {boolean}
 */

// 가장 간단한 코드 
const isPalindrome = function (s) {
    const str = s.match(/[a-zA-Z0-9]/g)?.join("").toLowerCase();
    if (!str) return true; // 빈 문자열은 리턴
    // 다시 문자열로 합쳐서 비교
    return str === [...str].reverse().join("");
};