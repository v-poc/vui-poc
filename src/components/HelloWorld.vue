<template>
  <h1>{{ msg }}</h1>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <v-progress-circular
    :size="80"
    :color="state.strokeColor"
    :value="state.count / 10"
    :width="5"
    :duration="500"
    is-animated
  >
    <v-amount
      :value="state.count * 10"
      :precision="0"
      is-animated
    ></v-amount>%
  </v-progress-circular>
  <v-action-bar :actions="state.actionData"></v-action-bar>
</template>

<script>
import { computed, reactive } from 'vue'
import { VActionBar, VAmount, VProgress } from 'vui-vc-next'

export default {
  name: 'HelloWorld',

  components: {
    [VActionBar.name]: VActionBar,
    [VAmount.name]: VAmount,
    [VProgress.name]: VProgress
  },

  props: {
    msg: String
  },

  setup() {
    const state = reactive({
      count: 0,
      strokeColor: computed(() => (state.count < 10 ? '#36C' : '#FC9153')),
      actionData: [
        {
          text: 'Reset',
          icon: 'clear',
          onClick: () => {
            state.count = 0
          }
        },
        {
          text: computed(() => `Count is: ${state.count}`),
          type: computed(() => (state.count < 10 ? 'primary' : 'disabled')),
          icon: 'edit',
          onClick: () => {
            state.count++
          }
        }
      ]
    })

    return {
      state
    }
  }
}
</script>

<style scoped>
::v-deep(.v-action-bar-button) {
  height: 36px;
}

.v-progress {
  margin: 20px auto;
  width: 80px;
}
</style>
