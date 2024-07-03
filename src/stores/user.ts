import { defineStore } from 'pinia'

import { find, findIndex, isEmpty, isEqual, maxBy, remove } from 'lodash-es'
import { DateTime } from 'luxon'

export interface Recado {
  id: number
  recado: string
  data: string
  usuario: Usuario
}

export interface Usuario {
  id: number
  nome: string
  foto: string
}

export const useMainStore = defineStore('main', () => {
  const usuario: Usuario = {
    id: 1,
    nome: 'Taiza',
    foto: 'https://cdn.quasar.dev/img/avatar1.jpg'
  }

  const usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Taiza',
      foto: 'https://cdn.quasar.dev/img/avatar1.jpg'
    },
    {
      id: 2,
      nome: 'Junior',
      foto: 'https://cdn.quasar.dev/img/avatar2.jpg'
    }
  ]

  const recados: Recado[] = JSON.parse(localStorage.getItem('recados') || '[]')

  function saveToLocalStorage() {
    localStorage.setItem('recados', JSON.stringify(recados))
  }

  function addRecado(recado: string) {
    console.log({ recado })
    const lastRecado = maxBy(recados, 'id')
    const recadoId = lastRecado ? lastRecado.id + 1 : 1
    const data = DateTime.now().toFormat('dd/MM/yyyy')
    const usuarioCreated = find(usuarios, { id: usuario.id }) as unknown as Usuario

    recados.push({ id: recadoId, data, usuario: usuarioCreated, recado })

    saveToLocalStorage()
  }

  function removeRecado(id: number) {
    remove(recados, { id })
    saveToLocalStorage()
  }
  return {
    usuarios,
    recados,
    usuario,
    addRecado,
    removeRecado
  }
})
