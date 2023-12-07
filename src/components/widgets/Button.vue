<template>
  <div class="wrapper-btn" :style="element.style">
    <a-button @click="() => {}">{{ element.name }} </a-button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  element: {
    type: Object,
    default: () => ({
      name: "Button",
    }),
  },
  // isRender: {
  //   type: Boolean,
  //   default: false,
  // },
});

// let renderData = ref({});
// renderData.value =
//   props.isRender === true
//     ? props.element
//     : {
//         name: "Button",
//       };
</script>

<style scoped lang="scss">
.wrapper-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 5px;
  box-sizing: border-box;
  // background-color: black;
}
</style>
