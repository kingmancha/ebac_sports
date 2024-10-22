import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './slices/carrinhoSlice'
import produtosReducer from './slices/produtosSlice'
import favoritosReducer from './slices/favoritosSlice'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    produtos: produtosReducer,
    favorios: favoritosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
