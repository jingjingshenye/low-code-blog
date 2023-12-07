<template>
  <div class="wrapper">
    <div class="1">
      <span>设置背景色</span>
      <a-input
        :value="attributeStore.currentAttribute?.style?.backgroundColor"
        @change="(e) => onSetValue(e)"
      ></a-input>
      <!-- <a-input v-model:value="fonsize" /> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAttributeStore } from "../../stores/attributeStore.js";
import { usePageDataStore } from "../../stores/pageDataStore";
const attributeStore = useAttributeStore();
const pageDataStore = usePageDataStore();

let fonsize = attributeStore.currentAttribute?.style?.fontSize;

function onSetValue(e) {
  attributeStore.currentAttribute.style.backgroundColor = e.target.value;
  console.log("e", e.target.value);

  //   pageDataStore.updatePageData(
  //     attributeStore.currentAttribute,
  //     attributeStore.currentAttributeId
  //   );
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
}
</style>
