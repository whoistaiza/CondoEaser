<template>
  <q-dialog v-model="props.showDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Editar Permissões</div>
      </q-card-section>
      <q-card-section v-if="props.currentRow">
        <q-list>
          <q-item v-for="permission in props.currentRow.permissions" :key="permission" clickable>
            <q-item-section>{{ permission }}</q-item-section>
            <q-item-section side>
              <q-checkbox
                :model-value="permission"
                true-value="true"
                false-value="false"
                @update:model-value="togglePermission(permission)"
              />
            </q-item-section>
          </q-item>
        </q-list>
        <q-input v-model="permissionToAdd" label="Adicionar Permissão" dense />
        <q-btn icon="add" color="orange" @click="addPermission" class="q-ml-sm" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="negative" @click="closeDialog" />
        <q-btn flat label="Salvar" color="positive" @click="savePermissions" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useMoradoresStore } from '../../stores/moradores' // Verifique o caminho correto da sua store

const props = defineProps({
  showDialog: {
    type: Boolean,
    required: true
  },
  currentRow: {
    type: Object as () => any,
    required: true
  }
})

const emits = defineEmits(['close'])

const moradoresStore = useMoradoresStore()




function savePermissions() {
  emits('close')
}

function closeDialog() {
  emits('close')
}
const permissionToAdd = ref('')
function addPermission() {
}

</script>

