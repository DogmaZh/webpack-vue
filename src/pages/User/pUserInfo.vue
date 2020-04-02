<template lang="pug">
  .user-info User info
    br
    router-link(:to="{name:'user'}") Close info
    br
    theme-button(text="Info button")
    br
    img(src="@assets/img/pUser/test.svg" style="width: 100px")
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

}
</style>
