<template>
  <app-layout>
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
