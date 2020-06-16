/**
 * 查找元素的索引值
 * 这个方法类似于findIndex。除了它从右到左遍历集合的元素。
 * @param  {array} array  需要检索的数组。
 * @param  {function} predicate 每个迭代函数调用。
 */
function findLastIndex(array, predicate) {
  var index =  array.findIndex(predicate)
  return array.length - 1 -index
}