<template>
  <div class="logo">
    <span class="text">PopCorns</span>
  </div>
</template>

<style lang="scss">
  .logo {
    width: 100px;
    height: 30px;
    position: relative;
    perspective: 100;
    margin-right: 30px;

    &::before {
      content: "";
      width: 100%;
      height: 30px;
      display: block;
      background-color: #E6B300;
      background-image: linear-gradient(45deg, rgb(252, 238, 33), rgb(237, 28, 36));
      transform-origin: 0 0;
      transform: rotateY(-15deg);
    }

    .text {
      display: block;
      margin-top: -30px;
      background-color: #222;
      color: #fff;
      transform-origin: 0 0;
      transform: rotateY(15deg);
      font-weight: bold;
      padding: 3px 5px;
      font-size: 1rem;
    }
  }
</style>
