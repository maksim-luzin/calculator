<template>
  <button class="button" @click="clickHandler()">{{ ButtonNames.Undo }}</button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import { ButtonNames, MutationTypes } from "@/general/enums";

const store = useStore();
const currentValuePosition = computed(
  () => store.getters.getCurrentValuePosition
);

const clickHandler = () => {
  if (currentValuePosition.value > 1) {
    store.commit(MutationTypes.UndoDigit);
  } else {
    store.commit(MutationTypes.UndoRecord);
  }
};
</script>

<style lang="scss">
.button {
  border: 1px solid darkred;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: #999;
  font-size: calc(0.07 * 90vh);
  cursor: pointer;

  &:hover {
    color: #eee;
    border-color: red;
  }
}
</style>
