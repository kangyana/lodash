/**
 * 获取元素的值
 * 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
 * @param  {array} array  要查询的数组。
 * @param  {number} n  要返回元素的索引值。
 */
function nth(array, n = 0) {
  var index = n >= 0 ? n : array.length + n
  return array[index]
}