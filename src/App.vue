<template>
  <div id="app">
    <h1 class="title">validation form</h1>
    <Form></Form>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  name: 'App',
  components: {
    Form,
  }
}
</script>

<style lang="sass">
#app 
  text-align: center
  margin-top: 60px

.title
  font-size: 30px
  text-transform: uppercase
</style>
