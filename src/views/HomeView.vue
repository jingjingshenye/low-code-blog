<script setup>
import ContainerComponent from "../components//ContainerComponent.vue";
</script>

<template>
  <main class="main">
    <div class="top-bar">低代码DEMO</div>
    <ContainerComponent />
  </main>
</template>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top-bar {
  width: 100vw;
  height: 10vh;
  padding: 10px;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}
</style>
