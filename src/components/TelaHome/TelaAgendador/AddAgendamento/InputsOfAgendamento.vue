<template>
  <div class="col-12">
    <InputDateTime @envity-dates="saveDate" />
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['envia-datas'])
const date = ref()
const date1 = ref()
function saveDate(date: any, date1: any) {
  emits('envia-datas', date1, date)
}
</script>
