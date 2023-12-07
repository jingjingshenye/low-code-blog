import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAttributeStore = defineStore("attribute", () => {
  let currentAttribute = ref({});
  let currentAttributeId = ref(null);

  function updateCurrentAttribute(attribute) {
    currentAttribute.value = attribute;
  }

  function updateCurrentAttributeId(id) {
    currentAttributeId.value = id;
  }
  return {
    currentAttribute,
    currentAttributeId,
    updateCurrentAttributeId,
    updateCurrentAttribute,
  };
});
