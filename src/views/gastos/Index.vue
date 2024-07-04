<template>
  <div class="q-ma-md">
    <ContentSection title-align="center">
      <template #title>Gerenciador Financeiro</template>
      <GastosTable @delete="deleteItem"/>
      <div class="q-pa-lg fixed-button">
        <q-btn color="primary" icon="mdi-plus" round size="1.5rem" @click="addModal = true">
          <q-tooltip> Adicionar Despósito/Saque </q-tooltip>
        </q-btn>
        <CommonModal v-model="addModal" title="Adicionar Depósito/Saque">
          <FormFinanceiro @submit="addFinanceiro" />
        </CommonModal>
      </div>
    </ContentSection>
  </div>
</template>
<script setup lang="ts">

const addModal = ref(false)
const store = useMainStore()

function addFinanceiro(dados: { valor: number, tipo: 'DEPOSITO' | 'SAQUE', descricao: 'string'}) {
  store.addFinanceiro(dados)  
  window.location.reload()
}

function deleteItem({ id }: { id: number }) {
  store.removeFinanceiro(id)
  window.location.reload()
}
</script>

<style scoped>
.fixed-button {
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>
