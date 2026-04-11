// /**
//  * @param {integer} init
//  * @return { increment: Function, decrement: Function, reset: Function }
//  */
// const createCounter = function (init) {
//     //기존 값과 바뀌는 값을 들고 있어야된다.
//     let origin = init
//     let current = init

//     const increment = () => current += 1
//     const reset = () => current = origin
//     const decrement = () => current -= 1

//     return { increment, reset, decrement }
// };

// /**
//  * const counter = createCounter(5)
//  * counter.increment(); // 6
//  * counter.reset(); // 5
//  * counter.decrement(); // 4
//  */

// --------------- 보완 ----------------- / 

/**
 * @param {number} init
 * @return {{ increment: Function, decrement: Function, reset: Function }}
 */
const createCounter = function (init) {
    // 1. 변수명은 의도가 명확하게 (initialValue)
    const initialValue = init;
    let currentCount = init;

    // 2. 명시적인 return을 통해 예측 가능한 코드 작성
    // 3. 단축 연산자(+=)를 활용하되, 가독성을 위해 화살표 함수 유지
    return {
        increment: () => {
            currentCount += 1;
            return currentCount;
        },
        decrement: () => {
            currentCount -= 1;
            return currentCount;
        },
        reset: () => {
            currentCount = initialValue;
            return currentCount;
        }
    };
};