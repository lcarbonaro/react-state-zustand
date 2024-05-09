import { create } from 'zustand'

const useCartStore = create((set) => ({
  products: [],
  
  addProduct: (product) => set((state) => ({ products: [...state.products, product]})),
  
  removeProduct: function removeProduct(productId) {
    set( function(state) {
      return { products : state.products.filter(p=>p.id!==productId) };
    });
  },

  clearProducts: function() {
    set((state) => ({ products: []}))
  }
  
}));

export default useCartStore;