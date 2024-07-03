<template>
  <div class="row justify-center items-center bg window-height">
    <q-card class="card">
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
            <q-btn label="Entrar" color="primary" class="q-mt-xl" @click="submit" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(() => {
  router.push('/login')
})
</script>

<style scoped>
.title {
  will-change: filter;
}
.title:hover {
  filter: drop-shadow(0 0 2em #646cffff);
}
</style>
