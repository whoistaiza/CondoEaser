<template>
  <q-table :columns="columns" :rows="rows" dense>
    <template #body="props">
      <q-tr
        :props="props"
        :class="`${props.rowIndex % 2 || 'strip'} text-center`"
        @click="$emit('row-click', props.row)"
      >
        <q-td v-for="col in props.cols" :key="col.index">
          <slot :name="`item-${col.field}`" v-bind="{ ...props.row, index: props.pageIndex }">
            {{ col.value }}
          </slot>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script setup lang="ts">
import { QTableColumn } from 'quasar'

const props = defineProps({
  columns: {
    type: Array as () => QTableColumn[],
    required: true
  },
  rows: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.strip {
  background-color: rgba(82, 72, 72, 0.05);
}
</style>
