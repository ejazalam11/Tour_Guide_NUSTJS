<template>
    <aside class="sidebar">
      <PanelMenu :model="items" class="menu" />
    </aside>
  </template>
  
  <script setup lang="ts">
  import PanelMenu from 'primevue/panelmenu';
  
  const items = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: '/'
    },
    {
      label: 'Tourists',
      icon: 'pi pi-users',
      routerLink: '/tourists'
    },
    {
      label: 'Districts',
      icon: 'pi pi-map-marker',
      routerLink: '/districts'
    },
    // Add more items as needed
  ];
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    min-height: 100vh;
    background: linear-gradient(to bottom, #2e3c65, #1d2540);
    padding: 24px 16px;
    color: white;
  }
  
  .menu :deep(.p-panelmenu) {
    background: transparent;
    border: none;
    color: white;
  }
  
  .menu :deep(.p-panelmenu .p-menuitem-link) {
    padding: 10px 12px;
    border-radius: 6px;
    transition: background 0.3s ease;
  }
  
  .menu :deep(.p-panelmenu .p-menuitem-link:hover) {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .menu :deep(.p-menuitem-text),
  .menu :deep(.p-menuitem-icon) {
    color: rgb(12, 6, 40);
  }
  </style>