<template>
  <CalculatorBody />
</template>

<script setup lang="ts">
import CalculatorBody from "./components/CalculatorBody.vue";
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: content-box;
  width: 100vw;
  height: 100vh;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
