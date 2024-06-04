<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1 class="title">Hello, Vue with SCSS!</h1>
    <p class="description">This is a Vue component styled with SCSS.</p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;

  .title {
    color: #42b983;
    font-size: 2em;
  }

  .description {
    color: #333;
    font-size: 1.2em;
  }
}
</style>
