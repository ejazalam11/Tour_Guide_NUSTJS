<template>
  <div class="layout">
    <!-- TopBar -->
    <div class="topbar">
      <TopBar />
    </div>

    <!-- Sidebar + Main Content -->
    <div class="main-area">
      <Sidebar />
      <div class="content-area">
        <slot /> <!-- This is where your Dashboard.vue will be rendered -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopBar from './Topbar.vue'
import Sidebar from './Sidebar.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.topbar {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.main-area {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.content-area {
  flex: 1;
  padding: 21px;
  overflow-y: auto;
  background: #f5f6fa;
}
</style>
