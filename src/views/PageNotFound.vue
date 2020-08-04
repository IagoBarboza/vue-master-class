<template>
  <div class="col-full">
    <h1 class="large-text">Not Found</h1>
    <p>Ooops, we couldn't find what you are looking for. Why don't you
      <router-link :to="{name: 'ThreadsList'}"> go to threads list instead? </router-link>
    </p>
  </div>
</template>

<style lang="scss" scoped>
  .large-text {
    font-size: 100px;
  }
  p {
    font-size: 50px;
    font-weight: 100;
  }
  div {
    text-align: center;
  }
</style>