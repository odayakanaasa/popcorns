<template>
  <b-navbar toggleable type="light" toggle-breakpoint="md">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <nuxt-link aria-disabled="false" to="#" target="_self" class="navbar-brand">
      <logo/>
    </nuxt-link>
    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
        </b-nav-form>
      </b-nav>
      <b-nav is-nav-bar class="ml-auto" v-if="false">
        <b-nav-item-dropdown v-if="false" right>
          <template slot="button-content">User</template>
          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item to="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
      <b-nav is-nav-bar class="ml-auto" v-else>
        <b-nav-item href="#">Iniciar Sesión</b-nav-item>
        <b-nav-item href="#">Regístrate</b-nav-item>
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import logo from '~/components/atoms/logo'

export default {
  components: {
    logo
  }
}
</script>

<style lang="scss">

</style>
