import vue from '@vitejs/plugin-vue'

export default {
  fmt: {},
  lint: {"options":{"typeAware":true,"typeCheck":true}},
  plugins: [
    vue()
  ],
  base: '/vui-poc/'
}
