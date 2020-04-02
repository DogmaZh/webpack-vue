<template lang="pug">
  .user Hello World from user!
    router-link(:to="{name:'main'}") Back to main
    .user__children More nesting here
      router-link(:to="{name:'userInfo'}") To user info
      router-view
</template>

<script>
export default {
  name: 'pUserIndex'
}
</script>
