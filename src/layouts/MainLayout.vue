<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <SideMenu />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SideMenu from "../components/SideMenu.vue";
export default {
  name: "MyLayout",
  components: {
    SideMenu,
  },
};
</script>
