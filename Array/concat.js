/**
 * 连接
 * 创建一个用任何数组 或 值连接的新数组
 * @param  {array} array  需要连接的数组
 * @param  {...*} [values]  需要连接的值
 */
function concat(array, [values]) {
  return array.concat([values])
}