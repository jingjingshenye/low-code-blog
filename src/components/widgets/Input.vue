<template>
  <div class="wrapper-input">
    <div>请输入：</div>
    <a-input :value="element.value"></a-input>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  element: {
    type: Object,
    default: () => ({
      name: "input",
    }),
  },
});
</script>

<style scoped lang="scss">
.wrapper-input {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  white-space: nowrap;
  padding: 5px;
  box-sizing: border-box;
}
</style>
