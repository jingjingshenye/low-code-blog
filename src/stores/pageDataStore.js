import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useAttributeStore } from "./attributeStore";
export const usePageDataStore = defineStore("pageData", () => {
  const existsComponentData = ref([
    { name: "Button", id: 1, style: { backgroundColor: "", fontSize: 26 } },
    {
      name: "Input",
      id: 2,
      style: { backgroundColor: "", fontSize: 22 },
      value: "Hello",
    },
  ]);
  let pageData = ref([]);

  // 这里不需要主动更新，由于数据是引用，改变elemet就改变了数组
  function updatePageData(data, index) {
    // pageData.value[index] = data;
    // console.log(pageData.value);
  }

  return { existsComponentData, pageData, updatePageData };
});
