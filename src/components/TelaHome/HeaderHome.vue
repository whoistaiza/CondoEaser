<template>
  <q-toolbar class="text-primary bg-red" @click="teste()">
    <q-btn flat round dense icon="menu" />
    <q-toolbar-title> Toolbar </q-toolbar-title>
    <q-btn flat round dense icon="more_vert" />
  </q-toolbar>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const teste = () => {
  router.push('/login')
}
</script>
