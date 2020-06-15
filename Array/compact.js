/**
 * 过滤假值
 * 创建一个数组删除了所有falsey值，false, null, 0, "", undefined, 和 NaN 都是 falsey值。
 * @param  {array} array  需要处理的数组
 */
function compact(array) {
  if (!Array.isArray(array)) return []
  return array.filter(v => v)
}