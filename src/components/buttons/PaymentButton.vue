<template>
  <button :disabled="isPaying || isPaid" @click="handleClick">
    <span class="rail"></span>
    <span class="icon"></span>
    <span class="text">
      {{ $t(label) }}
    </span>
  </button>
</template>

<script setup lang="ts">
const isPaying = ref(false)
const isPaid = ref(false)

const handleClick = () => {
  isPaying.value = true
  setTimeout(() => {
    isPaying.value = false
    isPaid.value = true
    setTimeout(() => {
      isPaid.value = false
    }, 2000)
  }, 2000)
}
const label = computed(() =>
  isPaying.value ? 'action.buy.ing' : isPaid.value ? 'action.buy.ed' : 'action.buy.index'
)
</script>
<style scoped>
button {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-clip: content-box;
  gap: 16px;
  color: #f9f9f9;
  background: #2932d1;
  border: 0;
  border-radius: 6px;
  padding: 0;
  width: 260px;
  height: 70px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

.rail {
  display: block;
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
  height: 2px;
  background: rgb(0 0 0 / 20%);
  opacity: 0;
}

button .icon {
  position: absolute;
  top: 50%;
  left: 30px;
  translate: 0 -50%;
  display: block;
  width: 30px;
  height: 18px;
  border-radius: 2px;
}

@keyframes icon {
  5%,
  100% {
    height: 6px;
    border-radius: 0;
  }
  3%,
  15% {
    background: #5059e9;
    translate: -30px 20px;
    scale: 1 0.25;
  }
  45% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
  25%,
  100% {
    translate: 240px 20px;
  }
}

button .icon::before,
button .icon::after {
  content: '';
  display: inherit;
  position: absolute;
  left: 0;
  width: 100%;
  background: #f9f9f9;
}

button .icon::before {
  top: 0;
  height: 12px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  transform-origin: 0 0;
}

@keyframes icon-after {
  5%,
  100% {
    opacity: 0;
  }
}

button .icon::after {
  bottom: 0;
  height: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

@keyframes text {
  0% {
    translate: -38% -50%;
  }
  4%,
  100% {
    translate: -50% -50%;
  }
  20%,
  40% {
    opacity: 0;
  }
  30%,
  50% {
    opacity: 1;
  }
}

button .text {
  position: absolute;
  top: 50%;
  left: 130px;
  translate: -38% -50%;
  white-space: nowrap;
}

button:disabled .text {
  animation: text 3.7s both ease-in;
}

button:disabled .icon {
  animation: icon 3.7s both ease-in;
}

@keyframes rail {
  0%,
  40% {
    opacity: 1;
  }
  55%,
  100% {
    opacity: 0;
  }
}

button:disabled .rail {
  animation: rail 3.7s both ease-in;
}
</style>
