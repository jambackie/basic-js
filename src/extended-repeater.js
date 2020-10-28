module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = '+', 
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|'
}) {
  const res = new Array(repeatTimes)
    .fill(`${str}${new Array(additionRepeatTimes)
    .fill(`${addition}`)
    .join(additionSeparator)}`)
    .join(separator)
  return res
}