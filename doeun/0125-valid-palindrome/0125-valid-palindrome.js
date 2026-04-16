/**
 * @param {string} s
 * @return {boolean}
 */

// 가장 간단한 코드 
// const isPalindrome = function (s) {
//     const str = s.match(/[a-zA-Z0-9]/g)?.join("").toLowerCase();
//     if (!str) return true; // 빈 문자열은 리턴
//     // 다시 문자열로 합쳐서 비교
//     return str === [...str].reverse().join("");
// };

// 반복 줄이기
const isPalindrome = function (s) {
    // 전처리: 영문자/숫자만 추출하여 소문자로 통일
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // 포인터 설정
    let left = 0;
    let right = cleaned.length - 1;

    // 양 끝에서 중앙으로 좁혀오며 비교
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false; // 하나라도 다르면 즉시 종료 (Early Return)
        }
        left++;
        right--;
    }

    return true;
};