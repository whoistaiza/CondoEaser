<template>
  <div class="q-ma-md">
    <DrawherMenu :open-list="true">
      <ContentSection title-align="center">
        <template #title>{{ formattedMonth }} </template>
        <MonthNavigation @today="onToday" @prev="onPrev" @next="onNext" />
        <div class="row justify-center font-custom">
          <div class="text-h5 calendar-size text-uppercase">
            <q-btn
              label="Agendar Evento"
              text-color="white"
              color="orange"
              @click="showCard = true"
            />
            <ModalAgendarAdd
              :show-card="showCard"
              @close="showCard = false"
              @salva-agend="handleDates"
            />
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
      </ContentSection>
    </DrawherMenu>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { QCalendarMonth, today } from '@quasar/quasar-ui-qcalendar/'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass'
import { useEventStore } from '../../../stores/event'
import { countryCodes } from '../lib'

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

const formattedMonth = computed(() => {
  const date = new Date(selectedDate.value)
  return monthFormatter().format(date) + ' ' + date.getFullYear()
})
const country = ref('BR')
function monthFormatter(): Intl.DateTimeFormat {
  try {
    return new Intl.DateTimeFormat(locale.value || undefined, {
      month: 'long',
      timeZone: 'UTC'
    })
  } catch (e) {
    console.error('Failed to create DateTimeFormat:', e)
    return new Intl.DateTimeFormat('en-US', { month: 'long' })
  }
}
const locale = computed(() => {
  if (country.value) {
    return countryCodes[country.value]
  }
  return 'pt-BR'
})
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
