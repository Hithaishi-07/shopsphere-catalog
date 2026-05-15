import { create } from 'zustand';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type Store = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useStore = create<Store>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.findIndex((item) => item.product.id === product.id);
      if (existing !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existing].quantity += 1;
        return { cart: updatedCart };
      }
      return { cart: [...state.cart, { product, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));