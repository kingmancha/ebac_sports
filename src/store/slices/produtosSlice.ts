import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Produto } from '../../components/Produto/styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

interface ProdutosState {
  items: Produto[]
  loading: boolean
  error: string | null
}

const initialState: ProdutosState = {
  items: [],
  loading: false,
  error: null
}

export const fetchProdutos = createAsyncThunk(
  'produtos/fetchProdutos',
  async () => {
    const response = await fetch(
      'https://fake-api-tau.vercel.app/api/ebac_sports'
    )
    const data = await response.json()
    return data
  }
)

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProdutos.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchProdutos.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Erro ao buscar produtos'
      })
  }
})

export default produtosSlice.reducer
