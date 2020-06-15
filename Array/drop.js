/**
 * 开头丢掉n个元素
 * 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
 * @param  {array} array  需要处理的数组
 * @param  {number} n 去除array前面的元素个数
 */
function drop(array, n = 1) {
  return array.slice(n)
}