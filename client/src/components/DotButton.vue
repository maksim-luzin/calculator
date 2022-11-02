<template>
  <button class="button" @click="clickHandler()">{{ ButtonNames.Dot }}</button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import { ButtonNames, MutationTypes } from "@/general/enums";

const store = useStore();

const lastCalculation = computed(() => store.getters.getLastCalculation);
const currentValue = computed(() => store.getters.getCurrentValue);
const isDot = computed(() => store.getters.hasCurrentValueDot);
const clickHandler = () => {
  if (lastCalculation.value === ButtonNames.Equals) {
    store.commit(MutationTypes.DeleteAllRecords);
    store.commit(MutationTypes.DeleteAllDigits);
  }
  if (!isDot.value) {
    store.commit(MutationTypes.AddDot);
    if (!currentValue.value) {
      return store.commit(MutationTypes.AddNewDigit, "0" + ButtonNames.Dot);
    } else {
      return store.commit(MutationTypes.AddNewDigit, ButtonNames.Dot);
    }
  } else if (currentValue.value.slice(-1) === ButtonNames.Dot) {
    store.commit(MutationTypes.DeleteDot);
    store.commit(MutationTypes.DeleteDigit);
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
