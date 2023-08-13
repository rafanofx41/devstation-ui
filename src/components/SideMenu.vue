<template>
  <q-header elevated class="bg-grey">
    <q-toolbar>
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      </q-toolbar>
      <LanguageSwitcher />
      <q-avatar style="width: 200px"
        ><img alt="Divvy" src="~assets/logo.png"
      /></q-avatar>
    </q-toolbar>
  </q-header>
  <q-drawer
    v-model="drawer"
    show-if-above
    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
    mini-to-overlay
    :width="200"
    :breakpoint="500"
    bordered
    class="bg-grey"
  >
    <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
      <q-list padding class="text-white">
        <template v-for="item in menuItens" :key="item.index">
          <MenuItem :item="item" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from "vue";

import MenuItem from "./MenuItem.vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";

export default defineComponent({
  name: "SideMenu",
  components: { MenuItem, LanguageSwitcher },
  setup() {
    return {
      drawer: ref(false),
      miniState: ref(true),
      menuItens: [
        { name: "menu.dashboard", icon: "dashboard" },
        { name: "menu.reports", icon: "summarize" },
        { name: "menu.customers", icon: "factory" },
        { name: "menu.travels", icon: "flight" },
        { name: "menu.timesheet", icon: "schedule" },
        {
          name: "menu.settings",
          icon: "settings",
          subs: [{ name: "menu.users", icon: "people" }],
        },
      ],
    };
  },
});
</script>
