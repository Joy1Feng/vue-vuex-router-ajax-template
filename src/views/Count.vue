<template>
  <div>
    <h1>count----{{count}}</h1>
    <button @click="increment(2)">increment</button>----
    <button @click="decrement">decrement</button>
    <ul>
      <li v-for="(item, index) in musicList" :key="index">songname---{{item.songname}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Count',
  computed: {
    ...mapState(['count', 'musicList'])
  },
  methods: {
    ...mapActions(['increment', 'decrement', 'getMusic'])
  },
  mounted () {
    this.getMusic()
  }
}
</script>

<style scoped>

</style>
