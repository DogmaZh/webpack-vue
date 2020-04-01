<template lang="pug">
  #app(@click="getClicks") {{ message }}
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: 'App',

  computed: {
    ...mapState(['count']),
    message() {
      return this.count > 0 ? `You clicked ${this.count} times` : 'Click me';
    }
  },

  methods: {
    ...mapMutations(['increment']),
    getClicks() {
      this['increment']();
    }
  },
}
</script>

<style lang="stylus">
#app 
  display flex
  height 100%
  justify-content center
  align-items center
  cursor pointer
</style>