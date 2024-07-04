<template>
  <SimpleTable :columns="columns" :rows="items">
    <template #item-permissoes="{ permissoes }">
      {{ getPermissoesDescricao(permissoes) }}
    </template>

    <template #item-actions="item">
      <TableActions :item="item" />
    </template>
  </SimpleTable>
</template>

<script setup lang="ts">
import { find, map } from 'lodash-es'
import { QTableColumn } from 'quasar'
import { ComputedRef, watch } from 'vue'
import SimpleTable from '../SimpleTable.vue'
import { Permissao } from '../../stores'

const store = useMainStore()

function buildItems(): { nome: string; permissoes: Permissao[]; usuarioId: number }[] {
  return map(store.usuarios, (usuario) => {
    return {
      nome: usuario.nome,
      permissoes: find(store.usuariosPermissoes, { usuarioId: usuario.id })?.permissoes,
      usuarioId: usuario.id
    }
  }) as { nome: string; permissoes: Permissao[]; usuarioId: number }[]
}

const items = ref(buildItems())

watch(
  store.usuariosPermissoes,
  (_) => {
    items.value = buildItems()
  },
  { deep: true }
)

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
      label: 'Permissões',
      field: 'permissoes',
      name: 'permissoes',
      align: 'center',
      sortable: true
    },
    {
      label: '',
      field: 'actions',
      name: 'actions',
      align: 'center',
      sortable: false
    }
  ]
})

const getPermissoesDescricao = (permissoes: Permissao[]): string => {
  return map(permissoes, 'descricao').join(', ')
}
</script>
