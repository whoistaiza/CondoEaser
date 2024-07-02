<template>
  <q-item>
    <div
      v-for="(event, index) in getEventsByDate(props.data)"
      :key="index"
      class="row items-center"
    >
      {{ event.name }} - {{ getEventTime(event.date) }}
    </div>
  </q-item>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: String,
    default: ''
  },
  events: {
    type: Array as () => any[],
    default: () => []
  }
})

function getEventsByDate(date: string) {
  return props.events.filter((event) => {
    const eventDate = new Date(event.date)
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
