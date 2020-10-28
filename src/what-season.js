module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!'
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error()
  }
  const season = ['winter', 'spring', 'summer', 'autumn', 'winter']
  return season[parseInt((date.getMonth() + 1) / 3)]
}
