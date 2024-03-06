<template>
  <div class="app-layout">
    <AppHeader />
    <main class="app-layout__main">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import AppHeader from '@/components/appHeader/appHeader.vue'
</script>

<style>
  .app-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .app-layout__main {
    flex: 1;
    padding: 1rem;
    background-color: #0f0f1a;
    color: #fafafa;
  }
</style>
