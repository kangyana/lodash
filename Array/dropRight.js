/**
 * 结尾丢掉n个元素
 * 创建一个切片数组，去除array结尾的n个元素。（n默认值为1。）
 * @param  {array} array  需要处理的数组
 * @param  {number} n 每个块的长度
 */
function dropRight(array, n = 1) {
  var result = array
  for(var i = 0; i < n; i++) {
    result.pop()
  }
  return result
}