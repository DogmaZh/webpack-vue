<template lang="pug">
  .user-info User info
    router-link(:to="{name:'user'}") Back to parent
    theme-button(text="Info button")
    img(src="@assets/img/pUser/test.jpg" style="width: 100px")
</template>

<script>
import ThemeButton from '../../components/ThemeButton';

export default {
  name: 'pUserIndex',

  components: { ThemeButton }
}
</script>

<style lang="stylus">
.user-info {
  display flex
  flex-direction column
  align-items center  
}
</style>
