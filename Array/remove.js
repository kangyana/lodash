/**
 * 删除数组中的元素
 * remove这个方法会改变数组array。
 * @param  {array} array  要修改的数组。
 * @param  {function} predicate 每次迭代调用的函数。
 */
function remove(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i], i)) {
      array.splice(i)
    }
  }
  return array
}