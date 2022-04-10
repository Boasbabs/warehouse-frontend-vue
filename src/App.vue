<template>
  <app-layout>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <template #main>
      <router-view />
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "./base-components/Layout.vue";
export default {
  components: {
    AppLayout
  }
};
</script>

<style>

</style>
