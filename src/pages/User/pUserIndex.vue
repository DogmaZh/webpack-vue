<template lang="pug">
  .user user page
    br
    router-link(:to="{name:'main'}") Back to main
    br
    br
    .user__children More nesting here
      br
      router-link(:to="{name:'userInfo'}") Open user info
      br
      br
      router-view
</template>

<script>
export default {
  name: 'pUserIndex'
}
</script>
