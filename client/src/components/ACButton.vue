<template>
  <button class="button" @click="clickHandler()">{{ props.name }}</button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useStore } from "@/store";
import { ButtonNames, MutationTypes } from "@/general/enums";

interface IButtonProps {
  name: ButtonNames;
}

const props = defineProps<IButtonProps>();
const store = useStore();

const clickHandler = () => {
  store.commit(MutationTypes.DeleteAllRecords);
  store.commit(MutationTypes.DeleteAllDigits);
  store.commit(MutationTypes.DeleteDot);
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
