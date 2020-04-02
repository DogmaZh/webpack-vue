<template lang="pug">
  button.btn.theme-button {{ text }}
</template>

<script>
export default {
  name: 'ThemeButton',

  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus">
.theme-button
  width 150px
  height 28px
  border-radius 12px
  text-transform uppercase
</style>