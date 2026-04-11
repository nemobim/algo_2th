/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function (init) {
    //기존 값과 바뀌는 값을 들고 있어야된다.
    let origin = init
    let current = init

    const increment = () => current += 1
    const reset = () => current = origin
    const decrement = () => current -= 1

    return { increment, reset, decrement }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */