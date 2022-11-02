<template>
  <div class="display-wrapper">
    <div class="display-calculation">{{ displayValue }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";

const displayValue = computed(() => useStore().getters.getCurrentCalculation);
</script>

<style lang="scss">
.display-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.display-calculation {
  width: 96%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #222;
  color: #999;
  font-size: calc(0.04 * 90vh);
  padding: 0 2px;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  margin: 0 calc(-0.01 * 90vh);
}
</style>
