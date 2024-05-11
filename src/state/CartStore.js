import { create } from 'zustand'

const useCartStore = create((set) => ({
  products: [],

  addProduct: function(product) {
    set( function(state) {      
      let products;
      if( state.products.filter(p=>p.id===product.id).length === 0 ) {
        products = [...state.products, product];
      } else {
        products = [...state.products];
      }      
      return { products };
    });

  },
  
  removeProduct: function removeProduct(productId) {
    set( function(state) {
      return { products : state.products.filter(p=>p.id!==productId) };
    });
  },

  clearProducts: function() {
    set((state) => ({ products: []}))
  },

  incrementQty: function(productId) {    
    set( function(state) {
      let products = state.products.map( function(p) {
        if(p.id === productId) {
          p.qty++;        
        } 
        return p;
      });
      return { products };
    });    
  },

  decrementQty: function(productId) {
    set( function(state) {
      let products = state.products.map( function(p) {
        if(p.id === productId) {
          p.qty = p.qty > 1 ? p.qty - 1 : p.qty;        
        } 
        return p;
      });
      return { products };
    }); 
  }

  
}));

export default useCartStore;