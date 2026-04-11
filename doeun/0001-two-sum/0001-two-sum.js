/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1. 포인터를 두고 target- p = ?? 여기에 해당하는 값 찾기? 단 본인 인덱스 이후부터 탐색

// const twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];

//         // 2. 본인 인덱스(i) '이후'부터만 탐색하도록 slice로 범위를 제한
//         // 3. findIndex 조건에서 0번 인덱스도 포함되도록 수정 (!== -1)
//         const subIndex = nums.slice(i + 1).findIndex((x) => x === complement);

//         if (subIndex !== -1) {
//             // slice를 했으므로 실제 인덱스는 (i + 1)을 더해줘야 함
//             return [i, subIndex + i + 1];
//         }
//     }

// };

// # 배열이 불필요하게 생성되고 반복도 자주 탐 

// 2. 이중 반복문으로 전체 조합 탐색하기
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = function(nums, target) {
//     // 첫 번째 포인터: 기준이 되는 숫자
//     for (let i = 0; i < nums.length; i++) {

//         // 두 번째 포인터: '본인 인덱스 이후부터' 탐색하기 위해 j를 i + 1로 설정
//         for (let j = i + 1; j < nums.length; j++) {

//             // 두 숫자의 합이 target과 일치하는지 확인
//             if (nums[i] + nums[j] === target) {
//                 // 일치하면 즉시 [i, j]를 반환하고 모든 루프와 함수를 종료
//                 return [i, j];
//             }
//         }
//     }
// };

// # 모든 조합을 다 뒤져보는 방식이라 범위가 클수록 느려짐

// 3. 이미 해본 조합을 기록하기 
// 이중 반복문은 매번 "내 짝이 뒤에 있나?" 하고 뒤를 돌아봅니다. 하지만 반대로 "내가 누군가의 짝이 될 수 있도록, 내가 본 숫자를 장부에 적어두는" 방식

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    // 숫자를 키로, 인덱스를 값으로 저장하는 장부(Map)
    const store = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num; // 내가 지금 찾는 내 짝꿍

        // 1. 장부에 내 짝꿍이 이미 등록되어 있는지 확인 (O(1))
        if (store.has(complement)) {
            // 있다면 [짝꿍의 인덱스, 나의 인덱스] 반환
            return [store.get(complement), i];
        }

        // 2. 짝꿍이 없다면, 다음 사람들을 위해 내 정보를 장부에 기록
        store.set(num, i);
    }
};