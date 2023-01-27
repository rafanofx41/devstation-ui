<template>
  <q-item clickable v-ripple v-if="!item.subs">
    <q-item-section avatar>
      <q-icon :name="item.icon" color="white" />
    </q-item-section>

    <q-item-section> {{ $t(item.name) }} </q-item-section>
  </q-item>
  <q-expansion-item
    v-else
    expand-separator
    icon="settings"
    :label="$t('menu.settings')"
    :content-inset-level="0"
    class="text-white"
  >
    <q-list padding class="text-white">
      <q-item clickable v-ripple class="q-pl-xl">
        <q-item-section avatar side>
          <q-icon name="people" color="white" />
        </q-item-section>

        <q-item-section> {{ $t("menu.users") }} </q-item-section>
      </q-item>
    </q-list>
  </q-expansion-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuItem",
  props: {
    item: {},
  },
});
</script>
