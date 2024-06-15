import { create } from 'zustand'

type State = {
    isModelMenuOpen: boolean
  }
  
  type Action = {
    setIsModalMenuOpen: (x: State['isModelMenuOpen']) => void
  }

export const modelStore = create<State & Action>((set) => ({
    isModelMenuOpen: false,
    setIsModalMenuOpen: (x) => set({isModelMenuOpen: x}) 
}))