/**
 * 深拷贝
 * 创建一个value的深克隆。
 * @param  {*} value  要深克隆的值。
 */

function cloneDeep(value) {
  // 记录被拷贝的值，避免循环引用的出现
  let memo = {}
  return baseClone(value, memo)
}

function baseClone(value, memo) {
  var result = value
  // 无效值
  if (!value) return result
  // 非对象且非数组
  var isObj = isObject(value)
  var isArr = Array.isArray(value)
  if (!isObj && !isArr) return result
  if (isArr) {
    // 数组
    result = [...value]
  } else {
    // 对象
    result = {...value}
  }
  Reflect.ownKeys(result).forEach(key => {
    const item = result[key]
    // 引用类型，递归拷贝
    if (typeof item === 'object' && item !== null) {
      // 录已经被拷贝过的引用地址
      if (memo[item]) {
        item = memo[item]
      } else {
        memo[item] = item
        item = baseClone(item)
      }
    }
  })
  return result
}

function isObject(value) {
  return Object.prototype.toString.call(value) === '[Object Object]'
}