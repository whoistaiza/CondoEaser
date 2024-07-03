import { defineStore } from 'pinia'

// Interface para representar um Evento
export interface Event {
  id: number
  userId: number
  dateInit: string
  dateFinal: string
  name?: string // Nome é opcional
}

// Defina o ID do seu store
const id = 'event'

export const useEventStore = defineStore(id, {
  state: () => ({
    events: [] as Event[]
  }),

  getters: {
    // Exemplo de getter para obter um evento pelo ID
    getEventById: (state) => (id: number) => {
      return state.events.find((event) => event.id === id)
    }
  },

  actions: {
    // Adicionar um novo evento
    addEvent(val1: any, val2: any, val3: any) {
      const nextId = this.events.length > 0 ? Math.max(...this.events.map((e) => e.id)) + 1 : 1
      const newEvent: Event = {
        id: nextId,
        userId: 0,
        dateInit: val1,
        dateFinal: val2,
        name: val3
      }
      this.events.push(newEvent)
      this.saveEventsToLocalStorage()
    },

    // Remover um evento pelo ID
    removeEvent(id: number) {
      const index = this.events.findIndex((event) => event.id === id)
      if (index !== -1) {
        this.events.splice(index, 1)
        this.saveEventsToLocalStorage()
      }
    },

    // Salvar os eventos no localStorage
    saveEventsToLocalStorage() {
      localStorage.setItem('events', JSON.stringify(this.events))
    },

    // Exemplo de uma ação para lidar com datas e adicionar um evento
    handleDates(val1: any, val2: any, val3?: any) {
      this.addEvent(val1, val2, val3) // Chama a função addEvent para adicionar um evento
    }
  },
  persist: true
})
