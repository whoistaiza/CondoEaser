
import { defineStore } from "pinia"; 
  
import { findIndex, isEmpty, isEqual } from "lodash-es"; 

export interface Recado {
  recado: string
  data: string
  usuario: Usuario
}
 
export interface Usuario {
  id: number
  nome: string
  foto: string
}

export const useMainStore = defineStore("main", () => { 
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
  ]; 

  const recados: Recado[] = [
    {
      recado: 'LARARARARA',
      data: '2024-06-23',
      usuario: {
        id: 1,
        nome: 'Taiza',
        foto: 'https://cdn.quasar.dev/img/avatar1.jpg'
      },
    },
    {
      recado: 'thererere',
      data: '2024-06-23',
      usuario: {
        id: 2,
        nome: 'Junior',
        foto: 'https://cdn.quasar.dev/img/avatar2.jpg'
      }
    }
]
  return { 
    usuarios,
    recados
  }; 
});