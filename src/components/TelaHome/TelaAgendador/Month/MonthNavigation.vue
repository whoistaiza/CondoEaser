<template>
  <div class="row justify-center">
    <div class="q-pa-md q-gutter-sm row">
      <q-btn
        no-caps
        class="button text-white  bg-orange text-uppercase bg-white"
        style="margin: 2px"
        @click="$emit('today')"
      >
        Anterior
      </q-btn>
      <q-btn
        no-caps
        class="button text-white  bg-orange text-uppercase bg-white"
        style="margin: 2px"
        @click="$emit('prev')"
      >
        Atual
      </q-btn>
      <q-btn
        no-caps
        class="button text-white  bg-orange text-uppercase bg-white"
        style="margin: 2px"
        @click="$emit('next')"
      >
        Próximo
      </q-btn>
    </div>
  </div>
</template>
