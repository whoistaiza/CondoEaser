<template>
  <q-btn icon="mdi-pencil" color="secondary" flat rounded @click="editModal = true">
    <q-tooltip> Editar Permissões </q-tooltip>
  </q-btn>

  <CommonModal v-model="editModal" title="EditarPermissoes">
    <EditFormPermissoes @submit="editPermissoes" :item="item" />
  </CommonModal>
</template>

<script setup lang="ts">
import { Permissao } from '../../stores'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})

const emits = defineEmits(['success'])

const store = useMainStore()
const editModal = ref(false)

function editPermissoes(permissoes: Permissao[]) {
  store.alteraPermissoesUsuario(permissoes, props.item.usuarioId)
  editModal.value = false
  notifyPositive('Permissões atualizadas com sucesso!')
  window.location.reload()
}
</script>
