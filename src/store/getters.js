export default {
  count1 (state) {
    return state.count % 2 === 1 ? '奇数' : '偶数'
  }
}
