/**
 * @param {number} x
 * @return {boolean}
 */
// const isPalindrome = function (x) {
//     // 양끝 부터 비교해서 다르면 false 처리

//     // 음수는 회문이 될 수 없음 (예: -121 -> 121-)
//     if (x < 0) return false;

//     // 문자로 변환 후 양끝 비교
//     const s = String(x);
//     let left = 0;
//     let right = s.length - 1;

//     while (left < right) {
//         if (s[left] !== s[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// };

const isPalindrome = function(x) {
    // 1. 문자열로 바꾼다: "121"
    // 2. 배열로 쪼갠다: ["1", "2", "1"]
    // 3. 순서를 뒤집는다: ["1", "2", "1"]
    // 4. 다시 합친다: "121"
    const reversed = x.toString().split('').reverse().join('');
    
    // 원래 숫자와 뒤집은 문자가 같은지 비교
    return x.toString() === reversed;
};