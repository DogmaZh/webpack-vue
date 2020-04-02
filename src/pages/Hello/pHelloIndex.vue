<template lang="pug">
  .hello Hello World!
    img(src="@assets/img/pUser/test.jpg" style="width: 100px")
    theme-button(text="Just a button")
    router-link(:to="{name:'user'}") To router check
</template>

<script>
import ThemeButton from '../../components/ThemeButton';

export default {
  name: 'pHelloIndex',

  components: { ThemeButton },
}
</script>

<style lang="stylus">
.hello
  display flex
  flex-direction column
  align-items center
</style>
