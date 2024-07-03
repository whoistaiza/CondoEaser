<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      hide-header
      hide-bottom
      title="Permissões dos Moradores"
      :rows="moradorStore.moradores"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn
              size="sm"
              color="accent"
              round
              dense
              @click="openDialog(props.row)"
              icon="settings"
            />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <CardPermissoes
      :showDialog="showDialog"
      :currentRow="currentRow"
      @close="showDialog = false"
      @save-permissions="savePermissions"
    />
  </div>
</template>

<script setup lang="ts">
import { useMoradoresStore } from '../../stores/moradores'
const moradorStore = useMoradoresStore()
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Morador',
    align: 'left',
    field: (row: any) => row.name,
    format: (val: any) => `${val}`,
    sortable: true
  },
  {
    name: 'permissions',
    align: 'center',
    label: 'Permissões',
    field: 'permissions',
    format: (val: any) => val.join(', '),
    sortable: true
  }
]

const rows = ref([
  {
    name: 'João Silva',
    permissions: ['Acesso à Piscina', 'Acesso ao Salão de Festas']
  },
  {
    name: 'Maria Souza',
    permissions: ['Acesso à Academia']
  },
  {
    name: 'Carlos Pereira',
    permissions: ['Acesso à Piscina', 'Acesso à Academia']
  },
  {
    name: 'Ana Costa',
    permissions: ['Acesso ao Salão de Festas']
  },
  {
    name: 'Lucas Oliveira',
    permissions: ['Acesso à Piscina', 'Acesso ao Salão de Festas', 'Acesso à Academia']
  }
])

const showDialog = ref(false)
const currentRow = ref<any>(null)

function openDialog(row: any) {
  console.log(row)
  currentRow.value = row
  showDialog.value = true
}

onMounted(() => {
  moradorStore.addMoradores(rows)
})
</script>

<style scoped>
.q-pa-md {
  padding: 16px;
}

.q-mt-md {
  margin-top: 16px;
}
</style>
