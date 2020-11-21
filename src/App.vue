<template>
  <img alt="Vue logo" v-lazy="'https://vuejs.org/images/logo.png'" @click="showPopup(true)"/>
  <HelloWorld ref="compRef" msg="Hello VUI"/>
</template>

<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld
  }
}

export const compRef = ref('compRef')

export const showPopup = (val) => {
  const comp = compRef && compRef.value
  comp && comp.showPopup(val)
}
</script>

<style scoped>
img {
  width: 50%;
}
</style>
