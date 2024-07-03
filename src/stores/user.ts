import { defineStore } from 'pinia'

import { filter, find, findIndex, isEmpty, isEqual, maxBy, remove } from 'lodash-es'
import { DateTime } from 'luxon'

export interface Permissao {
  id: number
  descricao: string
  chave: string
}
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
  admin: boolean
}

export interface UsuarioPermissoes {
  usuarioId: number
  permissoes: Permissao[]
}

export const useMainStore = defineStore('main', () => {
  const permissoes: Permissao[] = [
    {
      id: 1,
      descricao: 'Permissão adicionar recado',
      chave: 'adicionar_recado'
    },
    {
      id: 2,
      descricao: 'Permissão alugar salão',
      chave: 'alugar_salão'
    },
    {
      id: 3,
      descricao: 'Permissão alterar permissões',
      chave: 'alterar_permissões'
    },
    {
      id: 4,
      descricao: 'Permissão ver relatório de gastos',
      chave: 'relatorio_gastos_visualizacao'
    },
    {
      id: 5,
      descricao: 'Permissão cadastro de gastos',
      chave: 'cadastro_gastos'
    }
  ]

  // const usuariosPermissoes: { usuarioId: number, permissoes: Permissao[] }[] = [
  //   {
  //     usuarioId: 1,
  //     permissoes: []
  //   },
  //   {
  //     usuarioId: 2,
  //     permissoes: []
  //   },
  //   {
  //     usuarioId: 3,
  //     permissoes: []
  //   },
  //   {
  //     usuarioId: 4,
  //     permissoes: []
  //   }
  // ]

  const usuariosPermissoes: { usuarioId: number, permissoes: Permissao[] }[]  = JSON.parse(localStorage.getItem('usuariosPermissoes') || '[]')

  const usuario: Usuario = {
    id: 1,
    nome: 'Taiza',
    foto: 'https://cdn.quasar.dev/img/avatar1.jpg',
    admin: false
  }

  const usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Taiza',
      foto: 'https://cdn.quasar.dev/img/avatar1.jpg',
      admin: true
    },
    {
      id: 2,
      nome: 'Junior',
      foto: 'https://cdn.quasar.dev/img/avatar2.jpg',
      admin: false
    },
    {
      id: 3,
      nome: 'Francis',
      foto: 'https://cdn.quasar.dev/img/avatar2.jpg',
      admin: false
    },
    {
      id: 4,
      nome: 'André',
      foto: 'https://cdn.quasar.dev/img/avatar2.jpg',
      admin: false
    }
  ]

  const recados: Recado[] = JSON.parse(localStorage.getItem('recados') || '[]')

  function saveRecadosToLocalStorage() {
    localStorage.setItem('recados', JSON.stringify(recados))
  }

  function saveUsuariosPermissoesToLocalStorage() {
    console.log({ usuariosPermissoes })
    localStorage.setItem('usuariosPermissoes', JSON.stringify(usuariosPermissoes))
  }

  function addRecado(recado: string) {
    const lastRecado = maxBy(recados, 'id')
    const recadoId = lastRecado ? lastRecado.id + 1 : 1
    const data = DateTime.now().toFormat('dd/MM/yyyy')
    const usuarioCreated = find(usuarios, { id: usuario.id }) as unknown as Usuario

    recados.push({ id: recadoId, data, usuario: usuarioCreated, recado })

    saveRecadosToLocalStorage()
  }

  function removeRecado(id: number) {
    remove(recados, { id })
    saveRecadosToLocalStorage()
  }

  function alteraPermissoesUsuario(permissoes: Permissao[], usuarioId: number) {
    // console.log({ permissoes, usuarioId })
    remove(usuariosPermissoes, { usuarioId })
    usuariosPermissoes.push({ usuarioId, permissoes })
    // const usuario: Usuario = find(usuarios, { id: usuarioId }) as Usuario
    // const newUsuario: Usuario = { ...usuario, permissoes }
    // remove(usuarios, { id: usuarioId})
    // usuarios.push(newUsuario)
    saveUsuariosPermissoesToLocalStorage()
  }
  return {
    permissoes,
    usuarios,
    recados,
    usuario,
    addRecado,
    removeRecado,
    alteraPermissoesUsuario,
    usuariosPermissoes,
  }
})
