<template>
  <q-form @submit="submit">
    <div class="row q-gutter-md">
      <q-input
        v-model.number="form.valor"
        name="valor"
        label="Valor"
        class="col q-px-sm"
        type="number"
        dense
      />
      <q-select
        v-model="form.tipo"
        name="tipo"
        label="Tipo"
        class="col -px-sm"
        dense
        :options="tipoOptions"
        option-value="value"
        option-label="label"
      />
    </div>
    <div class="row q-gutter-md q-mt-md">
      <q-input
        v-model.number="form.descricao"
        name="descricao"
        label="Descrição"
        class="col q-px-sm"
        type="textarea"
        dense
      />
    </div>

    <div class="row justify-end q-mt-md">
      <q-btn color="primary" type="submit" label="Adicionar" />
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'

const emits = defineEmits(['submit'])

const form = ref({
  valor: null,
  tipo: null,
  descricao: null
})

const tipoOptions = ['DEPOSITO', 'SAQUE']

const submit = () => {
  emits('submit', form.value)
}
</script>
