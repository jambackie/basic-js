module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members.reduce(function (prev, item) {
      return prev = typeof item === 'string' 
      ? prev.concat(item.trim()[0].toUpperCase()) 
      : prev
    }, []).sort().join('')
  }
