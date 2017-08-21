<template>
  <section class="page-front">
    <b-jumbotron fluid>
      <h1 class="jumbotron-title">
        Explora nuestro catálogo de películas y renta la que quieras, cuando quieras
      </h1>
      <b-btn variant="primary" to="/" size="lg">Comienza ahora</b-btn>
    </b-jumbotron>

  </section>
</template>

<script>
export default {
  layout: 'landing'
}
</script>

<style lang="scss">
.page-front {
  .jumbotron-title {
    font-size: 45px;
    line-height: 65px;
    margin-bottom: 35px;
    padding-right: 20px;
    color: #2c3e50;
    display: block;
    text-align: left;
    font-weight: 700;
    margin-top: 4rem;
  }
}
</style>
