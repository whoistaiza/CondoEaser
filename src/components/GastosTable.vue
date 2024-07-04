<template>
  <SimpleTable :columns="columns" :rows="items">
    <template #item-usuario="{ usuario }"> {{ usuario.nome }}</template>

    <template #item-actions="item"> 
      <q-btn icon="mdi-delete" color="red" flat rounded size="0.8rem" @click="emits('delete', item)">
        <q-tooltip>Deletar</q-tooltip>
      </q-btn>
    </template>
  </SimpleTable>
</template>
<script setup lang="ts">
import { QTableColumn } from 'quasar'
import { ComputedRef } from 'vue'

const store = useMainStore()
const emits = defineEmits(['delete'])
const columns: ComputedRef<QTableColumn[]> = computed(() => {
  return [
    {
      label: 'Valor',
      field: 'valor',
      name: 'valor',
      align: 'center',
      sortable: true,
    },
    {
      label: 'Descrição',
      field: 'descricao',
      name: 'descricao',
      align: 'center',
      sortable: true,
    },
    {
      label: 'Tipo',
      field: 'tipo',
      name: 'tipo',
      align: 'center',
      sortable: true,
    },
    {
      label: 'Usuário',
      field: 'usuario',
      name: 'usuario',
      align: 'center',
      sortable: true,
    },
    {
      label: '',
      field: 'actions',
      name: 'actions',
      align: 'center',
      sortable: true,
    }
  ]
})

const items = computed(() => store.financeiro)
</script>
