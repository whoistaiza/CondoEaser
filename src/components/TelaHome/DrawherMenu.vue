<template>
  <q-layout class="shadow-2 rounded-borders">
    <q-drawer v-model="props.openList" show-if-above elevated class="bg-primary text-white">
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
  </q-layout>
</template>

<script setup lang="ts">
import { routers } from './lib'
import { useRouter } from 'vue-router'
const router = useRouter()
function changeRout(rout: string) {
  router.push(`/${rout}`)
}
const props = defineProps({
  openList: {
    type: Boolean,
    required: true
  }
})
</script>
