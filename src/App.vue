<template lang="pug">
  #app.main(@click="getClicks") 
    .main__clicks-count {{ message }}
    br
    router-view
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
.main 
  padding 30px 50px 0
  display flex
  height 100%
  flex-direction column
  cursor pointer
  
  &__clicks-count 
    text-align center
</style>