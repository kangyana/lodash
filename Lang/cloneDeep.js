/**
 * 深拷贝
 * 创建一个value的深克隆。
 * @param  {*} value  要深克隆的值。
 */

function cloneDeep(value) {
  let result = {}
  const types = [Date, RegExp, Set, Map, WeakMap, WeakSet] // 特殊类型
  Object.keys(value).forEach(key => {
    if (types.includes(value[key].constructor)) {
      // 特殊类型防丢失
      result[key] = new value[key].constructor(value[key])
    } else if (typeof value[key] === 'object') {
      // 引用类型需要递归
      result[key] = cloneDeep(value[key])
    } else {
      result[key] = value[key]
    }
  })
  return result
}

var obj = { r: /a/, d: new Date() }

var obj2 = cloneDeep(obj)

console.log(obj2)