import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "./estado"

const usuarioSlicer = createSlice({
    name: 'usuario',
    initialState:{
        status: ESTADO.Ocioso,
        mensagem: '',
        listaUsuarios: []  
    },
    reducers:{
        inserir:(estado, action) => {
            estado.listaUsuarios.push(action.payload)
        },
        editar: (estado, action) => {
            const listaTemporaria = estado.listaUsuarios.filter(usuario => usuario.id !== action.payload.id)
            estado.listaUsuarios = [...listaTemporaria, action.payload]
           
        },
        excluir: (estado, action) => {
            estado.listaUsuarios = estado.listaUsuarios.filter(usuario => usuario.id !== action.payload.id)
        }
    }
})

export const {inserir, editar, excluir} = usuarioSlicer.actions;
export default usuarioSlicer.reducer;