<template>
  <div class="display-wrapper">
    <div class="display-value">{{ currentValue }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";

const currentValue = computed(() => useStore().getters.getComputedValue);
</script>

<style lang="scss">
.display-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.display-value {
  width: 96%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #222;
  color: #999;
  font-size: calc(0.07 * 90vh);
  overflow-x: hidden;
}
</style>
