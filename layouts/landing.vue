<template>
  <div class="app">
    <siteHeader transparent="true"/>
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