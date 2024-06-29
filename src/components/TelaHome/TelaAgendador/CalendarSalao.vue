<template>
  <MontVisualization :select-date="selectedDate" />

  <MonthNavigation @today="onToday" @prev="onPrev" @next="onNext" />
  <div class="row justify-center font-custom">
    <div class="text-h5 calendar-size text-uppercase">
      <q-calendar-month
        ref="calendar"
        v-model="selectedDate"
        locale="pt-br"
        :day-min-height="100"
        class="cursor-pointer"
      >
      </q-calendar-month>
    </div>
  </div>
</template>
<script setup lang="ts">
import { QCalendarMonth, today } from '@quasar/quasar-ui-qcalendar/'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass'
const selectedDate = ref(today());
const instance = getCurrentInstance()

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
