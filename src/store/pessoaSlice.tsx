import { createSlice } from "@reduxjs/toolkit";

interface Pessoa {
  id: number,
  Nome: string,
  Sexo: string,
  Genero: string[]
}

const initialState = {
  pessoas: [] as Pessoa[],
};

const pessoaSlice = createSlice({
  name: "pessoa",
  initialState,
  reducers: {
    addPessoa: (state, action) => {
      state.pessoas.push(action.payload);
    },
    rmvPessoa: (state, action) => {
      state.pessoas = state.pessoas.filter((m: any) => m.Id !== action.payload.Id);
    }
  },
});

export default pessoaSlice.reducer;
export const { addPessoa, rmvPessoa } = pessoaSlice.actions;