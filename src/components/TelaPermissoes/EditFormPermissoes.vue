<template>
  <q-form @submit="submit">
    <div class="row">
      <q-input :model-value="item?.nome" name="Usuário" label="Usuário" class="col" dense disable />
    </div>
    <div class="row q-mt-md">
      <q-select v-model="selectedPermissoes" option-label="descricao" name="Permissões" label="Permissões" class="col" dense multiple :options="selectPermissoes"/>
    </div>

    <div class="row justify-end q-mt-md">
      <q-btn color="primary" type="submit" label="Salvar" />
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})

const store = useMainStore()

const emits = defineEmits(['submit'])

const selectedPermissoes = ref(props.item.permissoes)

const selectPermissoes = ref(store.permissoes)

const submit = () => {
  emits('submit', selectedPermissoes.value)
}
</script>
