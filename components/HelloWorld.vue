<template>
  <p v-text="msg"></p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="sass"></style>
