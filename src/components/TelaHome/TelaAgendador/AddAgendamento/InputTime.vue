<template>
  <div @click="showDatePopup = true">
    <q-input class="border" readonly :label="dateReceived" v-bind="$attrs" v-model="input">
      <template #prepend>
        <q-icon name="event" class="custom-color full-height q-px-md" color="white" />
      </template>
      <q-popup-proxy>
        <div v-if="showDatePopup && !showTimePopup">
          <CardDate @dateSelected="handleDateSelected" />
        </div>
        <div v-if="showTimePopup">
          <CardTime @timeSelected="handleTimeSelected" />
        </div>
      </q-popup-proxy>
    </q-input>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['envityDates'])
const props = defineProps({
  label: { type: String, required: true }
})

const input = ref('')
const dateReceived = ref(props.label)
const showDatePopup = ref(false)
const showTimePopup = ref(false)

const handleDateSelected = (date: string) => {
  showDatePopup.value = false
  input.value = date
  showTimePopup.value = true
}

const handleTimeSelected = (time: string) => {
  showTimePopup.value = false
  input.value = input.value + ' ' + time
  emits('envityDates', input.value)
  showDatePopup.value = false
}
</script>
