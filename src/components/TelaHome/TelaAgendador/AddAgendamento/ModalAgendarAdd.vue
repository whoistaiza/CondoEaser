<template>
  <q-dialog v-model="card">
    <div class="my-card relative-position no-scroll">
      <q-card class="no-scroll" flat>
        <HeaderCard option="Agendar Salão" @close="card = false" />
        <div class="q-px-md">
          <q-input v-model="name" label="Digite seu nome" stack-label />
        </div>
        <div class="q-px-md q-py-md">
          <InputsOfAgendamento @envia-datas="handleDates" />
        </div>

        <q-card-actions align="right">
          <q-btn label="Confirmar" flat class="bg-orange text-white" @click="addEvent()" />
        </q-card-actions>
      </q-card>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import HeaderCard from '../../../HeaderCard.vue'
import InputsOfAgendamento from './InputsOfAgendamento.vue'
const name = ref()
const date1 = ref()
const date = ref()
const emits = defineEmits(['close', 'salvaAgend'])
const card = ref()
const props = defineProps({
  showCard: {
    type: Boolean,
    required: true
  }
})
watchEffect(() => {
  if (props.showCard) {
    card.value = props.showCard
    emits('close')
  }
})

function handleDates(val: string, val2: string) {
  date.value = val
  date1.value = val2
}

function addEvent() {
  emits('salvaAgend', date, date1, name)
}
</script>
