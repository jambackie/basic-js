const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (isNaN(position) || position >= chainMaker.getLength()) {
      this.arr = []
      throw new Error()
    }
    this.arr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    const res = this.arr.join('~~')
    this.arr = []
    return res
  }
}

module.exports = chainMaker
