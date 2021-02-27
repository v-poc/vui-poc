<template>
  <img
    alt="Vue logo"
    v-lazy="'https://vuejs.org/images/logo.png'"
    @click="showPopup(true)"
  />
  <HelloWorld ref="compRef" msg="Hello VUI"/>
</template>

<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const compRef = ref('compRef')

const showPopup = (val) => {
  const comp = compRef && compRef.value
  comp && comp.showPopup(val)
}
</script>

<style lang="scss" scoped>
img {
  width: 50%;
}

@media (min-width: 640px) {
  img {
    width: 400px;
  }
}
</style>
