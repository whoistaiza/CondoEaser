<template>
  <div class="row justify-center items-center bg window-height">
    <q-card class="card">
      <div class="q-pa-md bg-primary text-white text-h5 text-bold">Identifique-se</div>
      <div class="q-pa-md bg-primary text-white text-h5 text-bold">Identifique-se</div>
      <q-separator dark inset />

      <q-card-section class="row">
        <q-form ref="formRef" class="q-gutter-md col">
          <q-input v-model="form.email" label="Email" lazy-rules class="q-mt-lg" />

          <q-input
            v-model="form.password"
            label="Senha"
            lazy-rules
            :type="passwordInputType"
            class="q-mt-lg"
          >
            <template #append>
              <q-icon
                :name="showPasswordIcon"
                class="cursor-pointer"
                @click="isPassword = !isPassword"
              />
            </template>
          </q-input>

          <div class="row reverse q-mt-xl">
            <q-btn
              label="Entrar"
              type="submit"
              color="primary"
              class="q-mt-xl"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const form = reactive({
      email: 'juliano@dev.com',
      password: 'hashed_password'
    })

    const isPassword = ref(true)

    const passwordInputType = computed(() => (isPassword.value ? 'password' : 'text'))

    const showPasswordIcon = computed(() => (isPassword.value ? 'visibility_off' : 'visibility'))

    function submit() {
      console.log(form)
    }
    return {
      form,
      submit,
      passwordInputType,
      showPasswordIcon,
      isPassword
    }
  }
})
</script>

<style scoped>
.bg {
  background-image: url(/img/condoeaser.png);
}

.card {
  height: 25rem;
  width: 40rem;
}
</style>
