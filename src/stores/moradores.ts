import { defineStore } from 'pinia'

// Defina o ID do seu store
const id = 'moradores'

// Interface para representar um Morador
interface Morador {
  name: string
  permissions: string[]
}

// Exporte e defina seu store usando defineStore
export const useMoradoresStore = defineStore(id, {
  state: () => ({
    moradores: [] as Morador[]
  }),

  getters: {
    getMoradorByName: (state) => (name: string) => {
      return state.moradores.find((morador) => morador.name === name)
    }
  },

  actions: {
    addPermissao(nomeMorador: string, permissao: string) {
      let morador = this.getMoradorByName(nomeMorador)
      if (morador) {
        if (!morador.permissions.includes(permissao)) {
          morador.permissions.push(permissao)
        }
      } else {
        morador = { name: nomeMorador, permissions: [permissao] }
        this.moradores.push(morador)
      }
    },

    removerPermissao(nomeMorador: string, permissao: string) {
      const morador = this.getMoradorByName(nomeMorador)
      if (morador) {
        morador.permissions = morador.permissions.filter((p) => p !== permissao)
        if (morador.permissions.length === 0) {
          this.moradores = this.moradores.filter((m) => m.name !== nomeMorador)
        }
      }
    },

    setPermissions(nomeMorador: string, novasPermissoes: string[]) {
      let morador = this.getMoradorByName(nomeMorador)
      if (morador) {
        morador.permissions = novasPermissoes
      } else {
        morador = { name: nomeMorador, permissions: novasPermissoes }
        this.moradores.push(morador)
      }
    },
    addMoradores(morador: any) {
      const moradorStore = useMoradoresStore()
      moradorStore.moradores = morador
    }
  }
})
