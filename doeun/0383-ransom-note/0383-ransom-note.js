/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// 해당 문자가 있는 위치를 찾으면 지우기
const canConstruct = function (ransomNote, magazine) {
    return magazine.includes(ransomNote)
};