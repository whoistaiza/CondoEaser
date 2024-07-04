<template>
    <div class="q-pa-md">
      <q-list bordered>
        <q-item v-for="morador in moradorStore.moradores" :key="morador.name" clickable>
          <q-item-section>
            <q-item-label>{{ morador.name }}</q-item-label>
            <q-item-label caption>{{ morador.permissions.join(', ') }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMoradoresStore } from '../../stores/moradores'

const moradorStore = useMoradoresStore()

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

onMounted(() => {
  moradorStore.addMoradores(rows.value)
})
</script>

<style scoped>
.q-pa-md {
  padding: 16px;
}
</style>
