<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import Draggable from "vuedraggable";
import RenderComponent from "./RenderComponent.vue";
import ExistsComponent from "./ExistsComponent.vue";
import AttributePanel from "./AttributePanel.vue";
import { useAttributeStore } from "../stores/attributeStore";
import { usePageDataStore } from "../stores/pageDataStore";

const attributeStore = useAttributeStore();
const pageDataStore = usePageDataStore();

function onStart(e: any) {
  // 开始拖动时触发的事件
  // console.log("开始拖拽 start:", e);
  // console.log("拖拽操作前的索引oldIndex:", e.oldIndex);
  // console.log("拖拽完成后的索引newIndex:", e.newIndex);
}
function onEnd(e: any) {
  // 拖动完成时触发的事件
  // console.log("结束拖拽 end:", e);
  // console.log("拖拽操作前的索引oldIndex:", e.oldIndex);
  // console.log("拖拽完成后的索引newIndex:", e.newIndex);

  // 更新数组索引
  attributeStore.updateCurrentAttributeId(e.newIndex);
  attributeStore.updateCurrentAttribute(pageDataStore.pageData[e.newIndex]);
}
function onMove(evt: any, originalEvent: DragEvent) {
  // 拖拽move事件回调
  // console.log("move:", evt);
  // console.log("originalEvent:", originalEvent);
  // 不允许拖拽
  return evt.draggedContext.element.id !== 7; // false表示阻止，true表示不阻止
}

function clone(origin) {
  //   @clone='cloneA'//这里获取的是个原生对象相关的
  //  :clone='cloneB' //这里是获取的list中的某一项，可以通过加工后返回></draggable>

  //通过转成字符串，让他变成一个新对象，不然拖拽第二个组件将会和第一个组件一模一样，改变第一个组件第二个、第三个也会跟着变动。
  const data = JSON.parse(JSON.stringify(origin));
  console.log("clone", data);
  return data;
}
</script>
<template>
  <div class="wrapper-container">
    <div class="left">
      <!-- 参考文档：https://github.com/SortableJS/vue.draggable.next
          https://www.itxst.com/vue-draggable-next/tutorial.html -->
      <Draggable
        animation="300"
        v-model="pageDataStore.existsComponentData"
        :group="{ name: 'human', pull: 'clone', put: false }"
        :clone="clone"
        :sort="false"
        item-key="id"
        @start="onStart"
        @end="onEnd"
        :move="onMove"
      >
        <template #item="{ element }">
          <ExistsComponent :element="element"></ExistsComponent>
        </template>
      </Draggable>
    </div>
    <div class="center">
      <Draggable
        class="drag-content"
        animation="300"
        v-model="pageDataStore.pageData"
        :group="{
          name: 'human',
          pull: false,
          put: true,
        }"
        filter=".unmover"
        draggable=".mover"
        item-key="id"
        @start="onStart"
        @end="onEnd"
        :move="onMove"
      >
        <template #item="{ element }">
          <RenderComponent :element="element"></RenderComponent>
        </template>
      </Draggable>
    </div>

    <div class="right">
      <AttributePanel />
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper-container {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
}
.left {
  width: 460px;
  height: 100%;
  padding: 30px;
}
.center {
  min-width: 500px;
  flex: 1;
  height: 100%;
  padding: 30px;
  background-color: #ececec;
  .drag-content {
    width: 100%;
    height: 100%; //建议是外层嵌套一层div，div固定高，此处再设为100%
  }
}
.right {
  width: 400px;
  height: 100%;
  padding: 30px;
}
</style>
