<template>
  <div class="app">
    <siteHeader/>
    <nuxt/>
  </div>
</template>

<script>
import siteHeader from '~/components/organisms/header'

export default {
  components: {
    siteHeader
  }
}
</script>

<style>
</style>