/**
 * @param {string} val
 * @return {Object}
 */
const expect = function(val) {
  // 객체를 반환해야 함
  return {
    toBe: (v) => {
      if (val === v) return true;
      throw new Error("Not Equal"); // 조건이 틀리면 에러 발생
    },
    notToBe: (v) => {
      if (val !== v) return true;
      throw new Error("Equal");
    }
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */