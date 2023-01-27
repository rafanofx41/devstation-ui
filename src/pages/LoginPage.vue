<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center background">
        <div class="column">
          <div class="row">
            <q-card square bordered class="q-pa-lg shadow-1">
              <img src="~assets/logo_escuro.svg" />
              <q-card-section>
                <q-form class="q-gutter-md">
                  <q-input
                    square
                    filled
                    clearable
                    v-model="email"
                    type="email"
                    label="email"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="password"
                    type="password"
                    label="password"
                  />
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-md">
                <q-btn
                  unelevated
                  size="md"
                  class="full-width bg-grey"
                  label="Login"
                  color="text-white"
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style>
.q-card {
  width: 360px;
}
.background {
  background-image: url("assets/login-bg.jpg");
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
>
