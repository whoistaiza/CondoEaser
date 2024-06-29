<template>
  <HeaderHome @openDrawner="open = !open" />
  <DrawherMenu :openList="open" />
</template>
<script setup lang="ts">
const open = ref(true)
</script>

<style scoped></style>
