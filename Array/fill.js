/**
 * 填充数组值
 * 从给定的开始位置填充给定的值，不包括结尾的位置的值
 * @param  {array} array  需要填充的数组
 * @param  {*} value 填充的值
 * @param  {number} start 开始的位置
 * @param  {number} end 结束位置
 */
function fill(array, value, start = 0, end = array.length) {
  var result = array
  for(var i = 0; i <= result.length; i++) {
    if (i >= start && i < end) {
      result[i] = value
    }
  }
  return result
}