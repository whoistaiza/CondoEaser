<template>
  <div class="q-ma-md">
    <ContentSection title-align="center">
      <template #title> Mural de Recados </template>
      <q-timeline v-if="!isEmpty(recados)" :layout="layout" color="secondary">
        <q-timeline-entry v-for="recado in recados" :side="getSide(recado)">
          <q-chat-message
            :avatar="recado.usuario.foto"
            :text="[recado.recado]"
            :stamp="recado.data"
            :sent="recadoFromUserLogged(recado)"
            :bg-color="getBgRecado(recado)"
            text-color="white"
            size="10"
          >
            <template #name>
              <div class="row items-center justify-between">
                <q-btn
                  v-if="recadoFromUserLogged(recado)"
                  icon="mdi-delete"
                  flat
                  color="red"
                  dense
                  size="0.7rem"
                  rounded
                  @click="removeRecado(recado.id)"
                />
                <span class="text-bold">
                  {{ recado.usuario.nome }}
                </span>
              </div>
            </template>
          </q-chat-message>
        </q-timeline-entry>
      </q-timeline>

      <div v-else class="row items-center justify-center">
        <span class="text-subtitle1">Sem recados disponíveis.</span>
      </div>

      <div class="q-pa-lg fixed-button">
        <q-btn color="primary" icon="mdi-plus" round size="1.5rem" @click="addModal = true">
          <q-tooltip> Adicionar recado </q-tooltip>
        </q-btn>
        <CommonModal v-model="addModal" title="Adicionar recado">
          <FormRecados @submit="addRecado" />
        </CommonModal>
      </div>
    </ContentSection>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { orderBy, isEmpty } from 'lodash-es'

import { useMainStore } from '../../stores/user'
import { Recado } from '../../stores'

const name = ref('')
const $q = useQuasar()
const addModal = ref(false)
const store = useMainStore()

const layout = computed(() => {
  return $q.screen.lt.sm ? 'dense' : $q.screen.lt.md ? 'comfortable' : 'loose'
})

const recados = ref(orderBy(store.recados, ['id'], ['desc']))
const userLogged = computed(() => store.usuario.id)

const addRecado = (recado: string) => {
  store.addRecado(recado)
  recados.value = orderBy(store.recados, ['id'], ['desc'])
  addModal.value = false
  notifyPositive('Recado adicionado com sucesso!')
}

const removeRecado = (id: number) => {
  store.removeRecado(id)
  recados.value = orderBy(store.recados, ['id'], ['desc'])
  notifyPositive('Recado removido com sucesso!')
}

const recadoFromUserLogged = (recado: Recado) => recado.usuario.id === userLogged.value

const getSide = (recado: Recado): 'left' | 'right' | undefined => {
  return recadoFromUserLogged(recado) ? 'left' : 'right'
}

const getBgRecado = (recado: Recado): string => {
  return recadoFromUserLogged(recado) ? 'primary' : 'secondary'
}
</script>

<style scoped>
.recado {
  border-radius: 10px !important;
}

.dialogo-card {
  clip-path: polygon(100% 0, 65% 11%, 84% 28%);
  width: 60px;
  height: 60px;
  position: relative;
  top: 55px;
  left: 613px;
}

.fixed-button {
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>

<style>
.q-timeline__dot-img {
  width: 60px !important;
  height: 60px !important;
  position: relative;
  left: -10px;
  top: 0px;
}
</style>
