import { create } from 'zustand'

const useCartStore = create((set) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product]})),
  
}));

export default useCartStore;