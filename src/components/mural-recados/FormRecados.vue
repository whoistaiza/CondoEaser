<template>
  <q-form @submit="submit">
    <div class="row">
      <q-input v-model="recado" name="recado" label="Recado" class="col" type="textarea" />
    </div>

    <div class="row justify-end q-mt-md">
      <q-btn color="primary" type="submit" label="Adicionar" />
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'

const emits = defineEmits(['submit'])

const recado = ref(null)

const submit = () => {
  emits('submit', recado.value)
}
</script>
