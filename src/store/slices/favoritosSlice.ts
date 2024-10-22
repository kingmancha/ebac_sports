import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../../App';

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: [],
};

const favoritosSlice = createSlice({
  name: 'favoritos'
  initialState
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoIndex = state.itens.findIndex(item => item.id === action.payload.id);

      if (produtoIndex >= 0) {
        state.itens.splice(produtoIndex, 1);
      } else {
        state.itens.push(action.payload);
      }
    },
  },
});

export const { favoritar } = favoritosSlice.actions;
export default favoritosSlice.reducer;
