<template>
  <div class="wrapper-component">
    <component
      :is="getComponent(element.name)"
      @click="onClickComponent(isRender)"
      :element="element"
      :isRender="isRender"
    ></component>
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
  isRender: {
    type: Boolean,
    default: true,
  },
});

function getComponent(name) {
  return gets[name];
}

function onClickComponent(isRender) {
  if (isRender) {
    console.log("isRender");
    attributeStore.updateCurrentAttribute(props.element);
  }
}
</script>

<style scoped lang="scss">
.wrapper-component {
  display: flex;
  // justify-content: center;
  align-items: center;
  font-size: 26px;
}
</style>
