<template>
  <div class="wrapper">
    <div class="content">
      <div class="title">属性面板</div>
      <component
        :is="getComponent(attributeStore.currentAttribute?.name)"
      ></component>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import attributes from "./attribute/allAttribute.js";
import { useAttributeStore } from "../stores/attributeStore.js";
import { usePageDataStore } from "../stores/pageDataStore";
const attributeStore = useAttributeStore();
const pageDataStore = usePageDataStore();

function getComponent(name) {
  console.log("name", name);
  if (name) {
    console.log(`${name}Attribute`);
    return attributes[`${name}Attribute`];
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .title {
    font-size: 36px;
  }
}
</style>
