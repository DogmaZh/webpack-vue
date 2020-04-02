<template lang="pug">
  .hello
    img(src="@assets/img/pUser/test.jpg" style="width: 100px")
    br
    br
    theme-button(text="Just a button")
    br
    br
    router-link(:to="{name:'user'}") user page
</template>

<script>
import ThemeButton from '../../components/ThemeButton';

export default {
  name: 'pHelloIndex',

  components: { ThemeButton },
}
</script>

<style lang="stylus">

</style>
