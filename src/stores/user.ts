import { defineStore } from 'pinia'

import { find, maxBy, remove } from 'lodash-es'
import { DateTime } from 'luxon'

const router = useRouter()

export interface MovimentoBancario {
  id: number
  valor: number
  tipo: 'DEPOSITO' | 'SAQUE'
  descricao: string
  usuario: Usuario
  data: string
}

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
  senha: string
  email: string
}

export interface UsuarioPermissoes {
  usuarioId: number
  permissoes: Permissao[]
}

export const useMainStore = defineStore('main', () => {
  const financeiro: MovimentoBancario[] = JSON.parse(
    localStorage.getItem('financeiro') || '[]'
  )

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

  const usuariosPermissoes: { usuarioId: number; permissoes: Permissao[] }[] = JSON.parse(
    localStorage.getItem('usuariosPermissoes') || '[]'
  )

  const usuario: Usuario = JSON.parse(localStorage.getItem('usuario') || '{}')

  const usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Taiza',
      foto: 'https://cdn.quasar.dev/img/avatar1.jpg',
      admin: true,
      email: 'taiza@email.com',
      senha: '123456'
    },
    {
      id: 2,
      nome: 'Junior',
      foto: 'https://cdn.quasar.dev/img/avatar2.jpg',
      admin: false,
      email: 'junior@email.com',
      senha: '123456'
    },
    {
      id: 3,
      nome: 'Francis',
      foto: 'https://cdn.quasar.dev/img/avatar2.jpg',
      admin: false,
      email: 'francis@email.com',
      senha: '123456'
    },
    {
      id: 4,
      nome: 'André',
      foto: 'https://cdn.quasar.dev/img/avatar2.jpg',
      admin: false,
      email: 'andre@email.com',
      senha: '123456'
    }
  ]

  const recados: Recado[] = JSON.parse(localStorage.getItem('recados') || '[]')

  function saveRecadosToLocalStorage() {
    localStorage.setItem('recados', JSON.stringify(recados))
  }

  function saveFinanceiroToLocalStorage() {
    localStorage.setItem('financeiro', JSON.stringify(financeiro))
  }

  function saveUsuariosPermissoesToLocalStorage() {
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

  function addFinanceiro({ valor, tipo, descricao }: { valor: number, tipo: 'DEPOSITO' | 'SAQUE', descricao: 'string'}) {
    const lastMovimento = maxBy(financeiro, 'id')
    const financeiroId = lastMovimento ? lastMovimento.id + 1 : 1
    const data = DateTime.now().toFormat('dd/MM/yyyy')
    const usuarioCreated = find(usuarios, { id: usuario.id }) as unknown as Usuario

    financeiro.push({ id: financeiroId, data, usuario: usuarioCreated, valor, tipo, descricao })

    saveFinanceiroToLocalStorage()
  }

  function removeFinanceiro(id: number) {
    remove(financeiro, { id })
    saveFinanceiroToLocalStorage()
  }

  function alteraPermissoesUsuario(permissoes: Permissao[], usuarioId: number) {
    remove(usuariosPermissoes, { usuarioId })
    usuariosPermissoes.push({ usuarioId, permissoes })
    saveUsuariosPermissoesToLocalStorage()
  }

  function login(usuarioLogado: Usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuarioLogado))
  }

  function logout() {
    localStorage.setItem('usuario', JSON.stringify({}))
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
    login,
    logout,
    addFinanceiro,
    removeFinanceiro,
    financeiro
  }
})
