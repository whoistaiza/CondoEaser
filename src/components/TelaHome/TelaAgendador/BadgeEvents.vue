<template>
  <q-item>
    <div
      v-for="(event, index) in getEventsByDate(props.data)"
      :key="index"
      class="row items-center"
    >
      {{ event.name }}
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
    const eventDate = new Date(event.date).toISOString().split('T')[0]
    return eventDate === date
  })
}
</script>
