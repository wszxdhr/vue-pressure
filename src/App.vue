<template>
  <div id="app">
    <img src="./assets/logo.png" v-pressure
         @pressureChange="scale = $event.force"
         @pressureEnd="scale = 0"
         @pressureDeepEnd="scale = 0"
         @touchend="scale = 0"
         @mouseup="scale = 0"
         :style="{
           transform: `scale(${1 + scale})`
         }"/>
    <HelloWorld v-pressure
                @pressureChange.native="scale2 = $event.force"
                @pressureEnd.native="scale2 = 0"
                @pressureDeepEnd.native="scale2 = 0"
                @touchend.native="scale2 = 0"
                @mouseup.native="scale2 = 0"
                :force="scale2"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data: () => ({
    scale: 0,
    scale2: 0
  }),
  components: {
    HelloWorld
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
