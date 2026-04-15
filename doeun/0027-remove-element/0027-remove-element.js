/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 제자리에서 요소를 없애고
// 유효한 남은 갯수를 반환한다.
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    // 쓰기 포인터(k): val이 아닌 값이 들어갈 위치
    let k = 0;

    // 읽기 포인터(i)로 배열 순회
    for (let i = 0; i < nums.length; i++) {
        // 현재 값이 val이 아니라면? "살려야 할 놈" 발견!
        if (nums[i] !== val) {
            // 현재 위치(i)의 값을 쓸 위치(k)에 덮어쓰기
            nums[k] = nums[i];
            // 다음 값을 위해 쓰기 포인터 전진
            k++;
        }
    }

    // 결국 k는 val이 아닌 요소의 총 개수가 됨
    return k;
};