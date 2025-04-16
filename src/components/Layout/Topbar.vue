<template>
    <header class="topbar">
      <div class="topbar-left">
        <!-- <img src="/logo.png" alt="Logo" class="logo" /> -->
        <h1>logo</h1>
      </div>
      <div class="topbar-right">
        <Input type="text" placeholder="Search..." class="search-input" />
        <i class="pi pi-bell icon"></i>
        <i class="pi pi-cog icon"></i>
        <i class="pi pi-user icon"></i>
      </div>
    </header>
  </template>
  
  <style scoped>
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    padding: 16px 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .topbar-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .logo {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
  
  .topbar-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .search-input {
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
  }
  
  .icon {
    font-size: 20px;
    color: #444;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .icon:hover {
    color: #007bff;
  }
  </style>
  