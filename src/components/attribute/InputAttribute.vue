<template>
  <div class="wrapper">
    <div>
      <div>设置内容</div>
      <a-input
        :value="attributeStore.currentAttribute?.value"
        @change="(e) => onSetValue(e)"
      ></a-input>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAttributeStore } from "../../stores/attributeStore.js";
import { usePageDataStore } from "../../stores/pageDataStore";
const attributeStore = useAttributeStore();
const pageDataStore = usePageDataStore();

function onSetValue(e) {
  console.log("e", e.target.value);
  attributeStore.currentAttribute.value = e.target.value;

  // pageDataStore.updatePageData(
  //   attributeStore.currentAttribute,
  //   attributeStore.currentAttributeId
  // );
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
