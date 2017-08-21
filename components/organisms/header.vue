<template>
  <header class="siteHeader" :class="{ 'transparent': transparent }">
    <navbar/>
  </header>
</template>

<script>
import navbar from '~/components/molecules/navbar'

export default {
  props: [
    'transparent'
  ],
  components: {
    navbar
  }
}
</script>

<style lang="scss">
.siteHeader {
  width: 100%;
  position: absolute;
  top:0;
  background-color: #fff;
  box-shadow: 10px 0 25px rgba(0,0,0,0.1);

  &.transparent {
    background-color: transparent;
    box-shadow: none;
    
  }
}
</style>
