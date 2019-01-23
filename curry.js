const curry = fn => (...args) => fn.bind(null, ...args);
function add(x, y ,z) {
    return [x, y ,z]
}
let curriedAdd = curry(add)
let a1 = curriedAdd(2)(3)(4)
console.log(a1)
let a2 = curriedAdd(2, 3)(4)
console.log(a2)
let a3 = curriedAdd(2, 3, 4)
console.log(a3)