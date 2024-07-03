<template>
  <q-dialog persistent :maximized="maximized">
    <q-card :style="cardSize">
      <q-card-section class="row items-center bg-accent">
        <div class="text-h5 text-white text bold">{{ title }}</div>
        <q-space />
        <q-btn
          v-if="!hideCloseButton"
          icon="close"
          flat
          round
          dense
          v-close-popup
          text-color="white"
          @click="$emit('close')"
        />
      </q-card-section>

      <q-separator />

      <q-card-section :class="noPadding && 'q-pa-none'">
        <slot />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { computed, defineEmits } from 'vue'
import { useQuasar } from 'quasar'
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  minWidth: {
    type: String,
    default: '900px'
  },
  minHeight: {
    type: String,
    default: ''
  },
  maximized: {
    type: Boolean,
    default: false
  },
  noPadding: {
    type: Boolean,
    default: false
  },
  hideCloseButton: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['close'])
const $q = useQuasar()
const cardSize = computed(() => {
  if ($q.screen.lt.md) {
    return 'min-width: 100% !important;'
  }
  return `
    min-height: ${props.minHeight} !important;
    min-width: ${props.minWidth} !important;
  `
})
</script>
