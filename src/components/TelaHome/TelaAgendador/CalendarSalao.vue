<template>
  <MontVisualization :select-date="selectedDate" />
  <MonthNavigation @today="onToday" @prev="onPrev" @next="onNext" />
  <div class="row justify-center font-custom">
    <div class="text-h5 calendar-size text-uppercase">
      <q-btn label="Agendar Evento" text-color="white" color="orange" @click="showCard = true" />
      <ModalAgendarAdd :show-card="showCard" @close="showCard = false" @salva-agend="handleDates" />
      <q-calendar-month
        ref="calendar"
        v-model="selectedDate"
        locale="pt-br"
        :day-min-height="100"
        class="cursor-pointer"
      >
        <template #day="{ scope: { timestamp } }">
          <BadgeEvents :data="timestamp.date" />
        </template>
      </q-calendar-month>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { QCalendarMonth, today } from '@quasar/quasar-ui-qcalendar/'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass'
import { useEventStore } from '../../../stores/event'
const eventStorage = useEventStore()
const selectedDate = ref(today())
const instance = getCurrentInstance()
const showCard = ref(false)

function onToday() {
  if (instance && instance.refs && instance.refs.calendar) {
    ;(instance.refs.calendar as QCalendarMonth).moveToToday()
  }
}

function onPrev() {
  if (instance && instance.refs && instance.refs.calendar) {
    ;(instance.refs.calendar as QCalendarMonth).prev()
  }
}

function onNext() {
  if (instance && instance.refs && instance.refs.calendar) {
    ;(instance.refs.calendar as QCalendarMonth).next()
  }
}

function handleDates(val: any, val2: any, val3?: any) {
  eventStorage.addEvent(val, val2, val3)
  notifyPositive('Agendado com sucesso!')
  return (showCard.value = false)
}
</script>

<style scoped>
.custom-color {
  background-color: rgb(31, 73, 125);
}
.calendar-size {
  width: 60rem;
}
.font-custom {
  font-family: Fira Sans;
}
.custom-margin {
  margin-right: 15rem;
}
</style>
