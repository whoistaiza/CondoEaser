<template>
  <q-item>
    <div
      v-for="(event, index) in getEventsByDate(props.data)"
      :key="index"
      class="row items-center text-body1"
    >
      {{ event.name }} - {{ getEventTime(event.dateInit) }}
      <q-btn
        @click="eventStorage.removeEvent(event.id)"
        icon="delete"
        color="orange"
        class="text-white"
      />
    </div>
  </q-item>
</template>

<script setup lang="ts">
import { useEventStore } from '../../../stores/event'
const eventStorage = useEventStore()
const props = defineProps({
  data: {
    type: String,
    default: ''
  }
})

function getEventsByDate(date: string) {
  return eventStorage.events.filter((event) => {
    const eventDate = new Date(event.dateInit)
    eventDate.setUTCHours(eventDate.getUTCHours() - 3)
    const adjustedEventDate = eventDate.toISOString().split('T')[0]
    return adjustedEventDate === date
  })
}

function getEventTime(dateString: string) {
  const eventDate = new Date(dateString)
  eventDate.setUTCHours(eventDate.getUTCHours() - 3)
  return eventDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}
</script>
