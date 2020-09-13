<template>
  <h1>{{ msg }}</h1>
  <v-button
    :type="count < 10 ? 'primary' : 'disabled'"
    icon="edit"
    inline
    @click="count++"
  >count is: {{ count }}</v-button>
  <v-button
    type="default"
    inline
    @click="count=0"
  >reset</v-button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <v-progress-circular
    :size="80"
    :value="count/10"
    :width="5"
    is-animated
  >
    <v-amount
      :value="count * 10"
      :precision="0"
      is-animated
    ></v-amount>%
  </v-progress-circular>  
</template>

<script>
import { VAmount, VButton, VProgress } from 'vui-vc-next'

export default {
  name: 'HelloWorld',
  components: {
    [VAmount.name]: VAmount,
    [VButton.name]: VButton,
    [VProgress.name]: VProgress
  },  
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
.v-button {
  margin: 20px
}

.v-progress {
  margin: 10px auto;
  width: 80px;
}
</style>