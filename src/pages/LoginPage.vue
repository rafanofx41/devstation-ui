<template>
  <q-layout>
    <q-page-container>
      <div class="row login-page">
        <div class="col">
          <q-form class="q-gutter-md justify-center formulario" @submit.prevent="handleLogin">
            <h4 class="titulo-login">Faça seu login</h4>
            <q-input square filled clearable v-model="form.email" type="email" label="Email" />
            <q-input square filled clearable v-model="form.password" type="password" label="Senha" />
            <a href="" class="float-right esqueceu-senha"><small>Esqueceu sua senha?</small></a>
            <q-btn label="Entrar" class="botao-entrar" type="submit" color="primary" />
          </q-form>
        </div>
        <div v-if="this.$q.screen.width >= 1000" class="col background justify-center">
          <div class="texto-background">
            <h1 class="text-white">Área Administrativa</h1>
          </div>
        </div>
      </div>
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
.formulario {
  margin: 0 auto;
  max-width: 80%;
  top: 20%;
}

.titulo-login {
  font-family: Source Sans Pro, sans-serif;
  color: #111317;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
}

.esqueceu-senha {
  color: #9199ab;
  font-family: Source Sans Pro, sans-serif;
  font-size: 16px;
  line-height: 23px;
}

.botao-entrar {
  width: -webkit-fill-available;
}

.my-card {
  width: 100%;
}

.login-page {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}

.background {
  background-image: url("assets/login-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;
}

.texto-background h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 60px;
  width: 396px !important;
  margin-left: 100px;
  margin-top: 60px;
}
</style>

