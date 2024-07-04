<template>
  <q-toolbar class="text-primary bg-primary z-top" v-if="showTabHeader">
    <q-btn flat round dense icon="menu" color="white" @click="openList = !openList" />
    <q-toolbar-title class="text-white"> Menu </q-toolbar-title>
    <q-btn flat round dense icon="mdi-logout" color="white" @click="logout">
      <q-tooltip>Sair</q-tooltip>
    </q-btn>
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
        <q-item v-for="rout in routers" clickable @click="changeRout(rout.route)">
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
import { isNil } from 'lodash-es'
import { useRoute } from 'vue-router'

const currentRoute = useRoute()
const store = useMainStore()

const exceptionRoutes = ['/login']
const router = useRouter()

const showTabHeader = computed(() => {
  return !exceptionRoutes.some((route) => currentRoute.path.includes(route))
})
const routers = [
  { icon: 'group', name: 'lista de moradores', route: 'listademoradores' },
  { icon: 'location_on', name: 'agendador', route: 'agendador' },
  { icon: 'calendar_view_month', name: 'mural de recados', route: 'mural' },
  { icon: 'paid', name: 'relatório de gastos', route: 'gastos' },
  { icon: 'mdi-cog', name: 'permissões', route: 'permissoes' }
]
function changeRout(rout: string) {
  router.push(`/${rout}`)
}

function logout() {
  store.logout()
  router.push('/login')
  setTimeout(() => {
    window.location.reload()
  }, 200)
}


const openList = ref(false)
</script>
