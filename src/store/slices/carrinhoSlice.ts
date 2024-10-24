import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from './produtosSlice'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const itemExistente = state.itens.find(
        (item) => item.id === action.payload.id
      )

      if (!itemExistente) {
        state.itens.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer
