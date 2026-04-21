/**
 * @param {number} n
 * @return {number}
 */

// 순서가 중요한 경우의 수
const climbStairs = function (n) {
    // 엣지 케이스,  1칸 이하일 때는 n 그대로 반환
    if (n <= 2) return n;

    //사실상 f2 부터 시작...
    let prev = 1; // n-2 단계의 값
    let curr = 2; // n-1 단계의 값

    for (let i = 3; i <= n; i++) {
        const next = prev + curr; // 현재 단계 = 전전 + 전
        prev = curr;              // 포인터 이동
        curr = next;
    }

    return curr;
};