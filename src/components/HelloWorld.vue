<template>
  <!-- START VTag -->
  <section>
    <v-tag
      type="fill"
      shape="circle"
      fill-color="#36C"
      font-color="#FFF"
      @click="showPopup(true)"
    >{{ msg }}</v-tag>
  </section>
  <!-- END VTag -->
  <!-- START VProgress -->
  <v-progress-circular
    :size="80"
    :color="state.strokeColor"
    :value="state.count / 10"
    :width="5"
    :duration="500"
    is-animated
    @click="showPopup(true)"
  >
    <v-amount
      :value="state.count * 10"
      :precision="0"
      is-animated
    ></v-amount>
    <span class="unit">%</span>
  </v-progress-circular>
  <!-- END VProgress -->
  <!-- START VPopup -->
  <v-popup
    position="bottom"
    v-model:value="state.isShowPopupTitleBar"
  >
    <v-popup-title-bar
      title="Hello Vue 3.0"
      describe="One Piece."
      ok-text="ok"
      cancel-text="cancel"
      @confirm="state.isShowPopupTitleBar=false"
      @cancel="state.isShowPopupTitleBar=false"
    ></v-popup-title-bar>
    <div class="v-example-popup-bottom">
      <v-cube-anim
        :scale="1.2"
        front="Vue3"
        back="Vite"
        bottom="Sass"
        right="VUI"
        @click="showPopup(true)"
      >
        <template #top>
          <img v-lazy="'https://vuejs.org/images/logo.png'" />
        </template>
        <template #left>
          <div class="v-example-op-cube">
            <v-one-piece :scale="0.8" />
          </div>
        </template>
      </v-cube-anim>
    </div>
  </v-popup>
  <!-- END VPopup -->
  <!-- START VLandscape -->
  <v-landscape
    v-model:value="state.isShowPopup"
    mask-closable
    :show-close="false"
    transition="v-bounce"
  >
    <div class="v-example-op">
      <v-one-piece :scale="1.8" />
    </div>
  </v-landscape>
  <!-- END VLandscape -->
  <!-- START VActionBar -->
  <v-action-bar :actions="state.actionData"></v-action-bar>
  <!-- END VActionBar -->
</template>

<script setup>
import {
  computed,
  // defineExpose,
  // defineProps,
  reactive
} from 'vue'

import {
  VActionBar,
  VAmount,
  VTag,
  VLandscape,
  VOnePiece,
  VPopup,
  VPopupTitleBar,
  VProgress as VProgressCircular,
  VCubeAnim
} from 'vui-vc-next'

defineProps({
  msg: String
})

const state = reactive({
  isShowPopupTitleBar: false,
  isShowPopup: false,
  count: 0,
  animDuration: 1000,
  strokeColor: computed(() => (state.count < 10 ? '#36C' : '#FC9153')),
  actionData: [
    {
      text: 'Reset',
      type: computed(() => (state.count > 0 ? 'default' : 'disabled')),
      icon: 'clear',
      onClick: () => (state.count = 0)
    },
    {
      text: computed(() => `Count is: ${state.count}`),
      type: computed(() => (state.count < 10 ? 'primary' : 'disabled')),
      icon: 'edit',
      onClick: () => {
        state.count++
        state.count === 10 && setTimeout(() => (state.isShowPopupTitleBar = true), state.animDuration)
      }
    }
  ]
})

const showPopup = (val) => {
  state.isShowPopup = val
}

defineExpose({
  showPopup
})
</script>

<style lang="scss" scoped>
.v-progress {
  margin: 50px auto;
  span {
    font-size: 30px;
  }
  span.unit {
    font-size: 20px;
  }
}

.v-example-op {
  padding-top: 120px;
  height: 480px;
}

.v-example-popup-bottom {
  background-color: #fff;
  img {
    width: 80%;
  }
  .v-example-op-cube {
    margin-top: -50px;
  }
}

::v-deep(.v-tag) {
  .size-large {
    font-size: 40px;
  }
}

::v-deep(.v-landscape-content) {
  width: 100vw;
}

::v-deep(.v-button) {
  height: 70px;
  line-height: 70px;
  font-size: 30px;
}
</style>
