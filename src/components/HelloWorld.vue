<template>
  <section>
    <v-tag
      type="fill"
      shape="circle"
      fill-color="#36C"
      font-color="#FFF"
      @click="showPopup(true)"
    >{{ msg }}</v-tag>
  </section>
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
    <div class="v-example-op-default">
      <v-one-piece @click="showPopup(true)" />
    </div>
  </v-popup>  
  <v-landscape
    v-model:value="state.isShowPopup"
    mask-closable
    :show-close="false"
    transition="v-bounce"
  >
    <div class="v-example-op">
      <v-one-piece :scale="1.8"/>
    </div>
  </v-landscape>
  <v-action-bar :actions="state.actionData"></v-action-bar>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { VActionBar, VAmount, VProgress, VTag, VLandscape, VOnePiece, VPopup, VPopupTitleBar } from 'vui-vc-next'

export default {
  name: 'HelloWorldVUI',

  components: {
    [VActionBar.name]: VActionBar,
    [VAmount.name]: VAmount,
    [VProgress.name]: VProgress,
    [VTag.name]: VTag,
    [VLandscape.name]: VLandscape,
    [VOnePiece.name]: VOnePiece,
    [VPopup.name]: VPopup,
    [VPopupTitleBar.name]: VPopupTitleBar
  },

  props: {
    msg: String
  }
}

export const state = reactive({
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
        state.count === 10 && setTimeout(() => (state.isShowPopupTitleBar = true), state.animDuration)
      }
    }
  ]
})

export const showPopup = (val) => {
  state.isShowPopup = val
}
</script>

<style lang="scss" scoped>
::v-deep(.v-action-bar-button) {
  height: 2.5rem;
  font-size: 1rem;
}

::v-deep(.v-tag) {
  .size-large {
    font-size: 2rem;
  }
}

::v-deep(.v-landscape-content) {
  width: 100vw;
}

::v-deep(.v-icon.icon-font.md) {
  font-size: 1rem;
}

.v-progress {
  margin: 1.5rem auto;

  span.unit {
    font-size: 0.25rem;
  }
}

.v-example-op {
  padding-top: 4.5rem;
  height: 16rem;
}

::v-deep(.v-example-op-default) {
  height: 10rem;
  background: #fff;
}

::v-deep(.v-popup-title-bar.large) {
  height: 3.6rem;
}
</style>
