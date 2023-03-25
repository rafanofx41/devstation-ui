<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center background">
        <div class="column">
          <div class="row">
            <q-card square bordered class="q-pa-lg shadow-1">
              <img src="~assets/logo_escuro.svg" />
              <q-card-section>
                <q-form class="q-gutter-md" @submit.prevent="handleLogin">
                  <q-input
                    square
                    filled
                    clearable
                    v-model="form.email"
                    type="email"
                    label="email"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="form.password"
                    type="password"
                    label="password"
                  />
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-md" @click="handleLogin()">
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
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "src/composables/UseAuth";
import useNotify from "src/composables/UseNotify";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const { signIn } = useAuth();
    const { notifyError, notifySuccess } = useNotify();
    const router = useRouter();

    const form = ref({
      email: "",
      password: "",
    });

    const handleLogin = async () => {
      try {
        await signIn(form.value.email, form.value.password);

        notifySuccess("Login successful");
        router.push({ path: "/" });
      } catch (error) {
        notifyError(error?.response?.data || "Login Invalid");
      }
    };

    return {
      form,
      handleLogin,
    };
  },
});
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
