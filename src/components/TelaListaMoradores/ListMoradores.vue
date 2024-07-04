<template>
  <ContentSection title-align="center">
    <template #title>Lista de Moradores</template>
    <SimpleTable :columns="columns" :rows="rows"/>
  </ContentSection>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMoradoresStore } from '../../stores/moradores'
import { QTableColumn } from 'quasar'
import { ComputedRef } from 'vue'

const moradorStore = useMoradoresStore()

const columns: ComputedRef<QTableColumn[]> = computed(() => {
  return [
    {
      label: 'Nome',
      field: 'nome',
      name: 'nome',
      align: 'center',
      sortable: true
    },
    {
      label: 'Bloco',
      field: 'bloco',
      name: 'bloco',
      align: 'center',
      sortable: true
    },
    {
      label: 'Apartamento',
      field: 'apartamento',
      name: 'apartamento',
      align: 'center',
      sortable: true
    },
    {
      label: 'Contato',
      field: 'contato',
      name: 'contato',
      align: 'center',
      sortable: true
    },
  ]
})

const rows = [
  {
    nome: 'Taiza',
    bloco: 'A',
    apartamento: '400',
    contato: 'taiza@email.com'
  },
  {
    nome: 'Francis',
    bloco: 'A',
    apartamento: '403',
    contato: 'francis@email.com'
  },
  {
    nome: 'Junior',
    bloco: 'B',
    apartamento: '500',
    contato: 'junior@email.com'
  },
  {
    nome: 'André',
    bloco: 'C',
    apartamento: '601',
    contato: 'andre@email.com'
  }
]

// onMounted(() => {
//   moradorStore.addMoradores(rows.value)
// })
</script>