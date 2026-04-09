/**
 * @param {number[]} nums1 : 오름차순 정렬
 * @param {number} m : 유효한 수
 * @param {number[]} nums2 : 오름차순 정렬
 * @param {number} n : 유효한 수 
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 이미 정렬 되어 있는걸 합치기만 하면 된다.
// 최종적으로 num1에 넣어야 된다는 제약 조건이 있다. 
// 앞으로 넣으면 밀어줘야 되니 뒤에 부터 채운다.

const merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;      // nums1의 데이터 끝
    let p2 = n - 1;      // nums2의 끝
    let i = m + n - 1;   // nums1의 전체 공간 끝

    //p2에 옮길 숫자가 없을때까지 반복
    while (p2 >= 0) {
        // nums1에 남은 게 있고, 그게 nums2보다 크면 nums1 선택
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        }
        // nums1을 다 썼거나, nums2가 더 크면 무조건 nums2 선택
        else {
            nums1[i] = nums2[p2];
            p2--; // p2가 줄어들어야 루프가 언젠가 끝난다.
        }
        i--;
    }
};
