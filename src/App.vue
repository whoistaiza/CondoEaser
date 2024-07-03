<template>
  <q-toolbar class="text-primary bg-primary z-top" v-if="showTabHeader">
    <q-btn flat round dense icon="menu" color="white" @click="openList = !openList" />
    <q-toolbar-title class="text-white"> Menu </q-toolbar-title>
  </q-toolbar>
  <q-layout class="q-py-md">
    <q-drawer
      v-model="openList"
      show-if-above
      elevated
      class="bg-primary text-white"
      v-if="showTabHeader"
    >
      <q-scroll-area class="fit">
        <q-item v-for="rout in routers" clickable @click="changeRout(rout.name)">
          <q-item-section avatar>
            <q-icon :name="rout.icon" color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-capitalize">{{ rout.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const currentRoute = useRoute()

const exceptionRoutes = ['/login']
const router = useRouter()

const showTabHeader = computed(() => {
  return !exceptionRoutes.some((route) => currentRoute.path.includes(route))
})
const routers = [
  { icon: 'group', name: 'lista de moradores' },
  { icon: 'location_on', name: 'agendador' },
  { icon: 'calendar_view_month', name: 'mural de recados' },
  { icon: 'paid', name: 'relatorio de gastos' },
  { icon: 'edit', name: 'permissoes' }
]
function changeRout(rout: string) {
  router.push(`/${rout}`)
}
const openList = ref(false)
</script>
