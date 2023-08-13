<template>
  <!-- ...... -->
  <q-select
    v-model="lang"
    :options="localeOptions"
    color="gray"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 80px"
    :input-style="{ color: '#ff0000' }"
  >
    <template v-slot:selected-item="scope">
      <q-chip dense text-color="white" color="grey">
        {{ scope.opt.label }}
      </q-chip>
    </template>
  </q-select>
  <!-- ...... -->
</template>

<script>
export default {
  data() {
    return {
      lang: this.$i18n.locale,
      localeOptions: [
        { value: "pt-BR", label: "PT-BR" },
        { value: "en-US", label: "EN-US" },
        { value: "es-ES", label: "ES-ES" },
      ],
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      import(`quasar/lang/${lang}`).then((language) => {
        this.$q.lang.set(language.default);
      });
    },
  },
};
</script>

<style lang="scss">
.q-select__dropdown-icon {
  color: white;
}
</style>
