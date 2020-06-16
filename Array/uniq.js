/**
 * 数组去重
 * 创建一个去重后的array数组副本。使用了SameValueZero做等值比较。只有第一次出现的元素才会被保留。
 * @param  {array} array  要检查的数组。
 */
function uniq(array) {
  return fun2(array)
}
// reduce
function fun1(array) {
  let result = array.reduce((p, v) => {
    return p.includes(v) ? p : p.concat(v)
  }, [])
  return result
}
// 哈希算法
function fun2(array) {
  let result = array.filter(v => v)
  let hash = {}
  result = result.reduce((p, v) => {
    hash[v] ? '' : hash[v] = true && p.push(v)
    return p 
  }, [])
  return result
}
// es5
function fun3(array) {
  return array.filter((v, i) => array.indexOf(v) === i)
}
// es6
function fun4(array) {
  return [...new Set(array)]
}
