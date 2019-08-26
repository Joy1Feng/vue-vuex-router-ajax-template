import { INCREMENT_COUNT, DECREMENT_COUNT, GET_MUSIC } from './mutation-types'

export default {
  [INCREMENT_COUNT] (state, { num }) {
    state.count = state.count + num
  },
  [DECREMENT_COUNT] (state) {
    state.count--
  },
  [GET_MUSIC] (state, { musics }) {
    state.musicList = musics
  }
}
