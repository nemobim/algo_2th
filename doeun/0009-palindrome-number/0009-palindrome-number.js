/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    // 양끝 부터 비교해서 다르면 false 처리

    // 음수는 회문이 될 수 없음 (예: -121 -> 121-)
    if (x < 0) return false;

    // 문자로 변환 후 양끝 비교
    const s = String(x);
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};