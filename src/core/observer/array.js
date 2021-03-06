const arrayProto = Array.prototype

// 
export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'
]

methodsToPatch.forEach(method => {
  let originalFunc = arrayMethods[method]
  Object.defineProperty(arrayMethods, method, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function mutator(...args) {
      const result = originalFunc.apply(this, args)
      console.log('这里执行数组的依赖更新', this)
      return result
    }
  })
})