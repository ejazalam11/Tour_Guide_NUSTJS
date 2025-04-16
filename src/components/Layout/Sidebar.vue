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
      icon: 'pi pi-home'
    },
    {
      label: 'Tourists',
      icon: 'pi pi-users'
    },
    {
      label: 'Districts',
      icon: 'pi pi-map-marker'
    },
    {
      label: 'Places',
      icon: 'pi pi-map',
      items: [
        { label: 'Picnic Points', icon: 'pi pi-image' },
        { label: 'Most Visited', icon: 'pi pi-star' },
        { label: 'Lakes', icon: 'pi pi-globe' },
        { label: 'National Parks', icon: 'pi pi-tree' }
      ]
    },
    {
      label: 'Reports',
      icon: 'pi pi-chart-bar'
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog'
    }
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
  