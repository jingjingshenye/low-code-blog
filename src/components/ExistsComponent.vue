<template>
  <div class="wrapper">
    <a-card :bordered="true" style="width: 300px">
      <component
        :is="getComponent(element.name)"
        :element="element"
      ></component>
    </a-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAttributeStore } from "../stores/attributeStore.js";
import gets from "./widgets/getAllComponent.js";

const attributeStore = useAttributeStore();

const props = defineProps({
  element: {
    type: Object,
    default: () => ({}),
  },
});

function getComponent(name) {
  return gets[name];
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  padding: 10px 20px;
  transition: 0.3s;
  &:hover {
    border: 2px solid black;
  }
}
</style>
