<template>
  <div>
    <div v-if="$slots.title" :class="`row justify-${titleAlign}`">
      <div class="bg-primary text-white text-bold content-title q-ml-md">
        <slot name="title" />
      </div>
    </div>
    <div class="content shadow-2 q-pa-sm">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  titleAlign: {
    type: String,
    default: () => 'start'
  },
  title: {
    type: String,
    default: null
  }
})
</script>

<style scoped>
.content {
  border-radius: 5px;
}
.content-title {
  font-size: 0.95rem;
  border-radius: 0.75rem 0.75rem 0 0;
  padding: 0.1rem 1.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
