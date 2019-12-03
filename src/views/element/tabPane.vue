<template>
  <div>tabPane{{name}}</div>
</template>

<script>
  export default {
    name: 'tabPane',
    data () {
      return {
        name: '11'
      }
    },
    mounted () {
      console.log('tabPane')
    }
  }
</script>

<style scoped>

</style>
