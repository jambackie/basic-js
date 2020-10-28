module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) return 1
    return Array.isArray(arr)
      ? Math.max(...arr.map((arrItem) => this.calculateDepth(arrItem))) + 1
      : 0
  }
}