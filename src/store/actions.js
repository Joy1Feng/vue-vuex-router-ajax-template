import { INCREMENT_COUNT, DECREMENT_COUNT, GET_MUSIC } from './mutation-types'
import { reqMusicList } from '../api'

export default {
  increment ({ commit }, num) {
    commit(INCREMENT_COUNT, { num })
  },
  decrement ({ commit }) {
    commit(DECREMENT_COUNT)
  },
  async getMusic ({ commit }) {
    const musicList = await reqMusicList()
    const musics = musicList.data
    commit(GET_MUSIC, { musics })
  }
}
