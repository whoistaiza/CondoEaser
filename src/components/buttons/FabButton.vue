<template>
  <div class="fab" :class="openClass">
    <button @click="isOpen = !isOpen">
      <i class="material-icons">add</i>
    </button>
    <div class="menu">
      <button>
        <i class="material-icons">add_box</i>
      </button>
      <button>
        <i class="material-icons">sell</i>
      </button>
      <button>
        <TranslationComponent />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const isOpen = ref(false)
const openClass = computed(() => (isOpen.value ? 'open' : ''))
</script>
<style scoped>
.fab {
  position: fixed;
  right: 30px;
  bottom: 38px;
}
button {
  background: transparent;
  border: 0;
}

.fab > button {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 0;
  background: #eb2ef7;
  color: #f9f9f9;
  transition: 0.2s;
  rotate: 0;
}

.fab > button > span {
  font-size: 32px;
}

.menu {
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  translate: -50% -50%;
  border: 80px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  rotate: -220deg;
  scale: 0.7;
  opacity: 0;
  transition: 0.4s;
}

.fab.open > button {
  rotate: 45deg;
}

.fab.open .menu {
  rotate: 0deg;
  scale: 1;
  opacity: 1;
}

.menu > button {
  position: absolute;
  transition: 0.3s;
}

.menu > button:hover {
  scale: 1.2;
}

.material-symbols-outlined {
  font-size: 40px;
}

.menu > button:nth-child(1) {
  left: -100px;
  /* top: -62px; */
  color: #439ffd;
}

.menu > button:nth-child(2) {
  left: -70px;
  top: -70px;
  color: #36c6a0;
}

.menu > button:nth-child(3) {
  left: 0px;
  top: -100px;
  color: #bfca68;
}
</style>
