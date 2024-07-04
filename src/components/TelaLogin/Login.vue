<template>
  <div class="row justify-center items-center bg window-height">
    <q-card class="card">
      <div class="q-pa-md bg-primary text-white text-h5 text-bold">Identifique-se</div>
      <q-separator dark inset />

      <q-card-section class="row">
        <q-form ref="formRef" class="q-gutter-md col">
          <q-input v-model="form.email" label="Email" lazy-rules class="q-mt-lg" />

          <q-input
            v-model="form.senha"
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
import { reactive, ref, computed } from 'vue'
import { find, isEmpty, isNil } from 'lodash-es'
import { Usuario } from '../../stores'

const form = reactive({
  email: null,
  senha: null
})

const store = useMainStore()

const isPassword = ref(true)
const router = useRouter()

const passwordInputType = computed(() => (isPassword.value ? 'password' : 'text'))

const showPasswordIcon = computed(() => (isPassword.value ? 'visibility_off' : 'visibility'))

function submit() {
  const { email, senha } = form
  const usuario: Usuario | undefined = find(store.usuarios, { email, senha }) as Usuario | undefined

  if (!isNil(usuario)) {
    store.login(usuario)
    notifyPositive('Login efetuado com sucesso!')
    router.push('/mural')
    return
  }
  notifyNegative('Senha ou email inválido!')
}
</script>

<style scoped>
.bg {
  background-image: url('/img/condoeaser.png');
}

.card {
  height: 25rem;
  width: 40rem;
}
</style>
