/**
 * @param {string} s
 * @return {boolean}
 */

const pair = {
    "(": ")",
    "{": "}",
    "[": "]"
}

const isValid = function (s) {
    if (s.length % 2 !== 0) return false;

    const stack = []; // 배열을 스택으로 사용

    for (let str of s) {
        if (pair[str]) {
            // 열린 괄호라면? 대응하는 '닫힌 괄호'를 스택에 push
            stack.push(pair[str]);
        } else {
            // 닫힌 괄호라면? 스택에서 하나 꺼내서 현재 괄호와 비교
            // 스택에서 꺼낸 값(기대값)이 현재 괄호와 다르면 바로 false
            if (stack.pop() !== str) return false;
        }
    }

    // 마지막에 스택이 비어있어야 함 (길이가 0이면 true)
    return stack.length === 0;
};