import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "./estado"

const mensagemSlicer = createSlice({
    name: 'chat',
    initialState:{
        status: ESTADO.Ocioso,
        mensagem: '',
        listaMensagens: []  
    },
    reducers:{
        inserir:(estado, action) => {
            estado.listaMensagens.push(action.payload)
        },
        editar: (estado, action) => {
            const listaTemporaria = estado.listaMensagens.filter(mensagem => mensagem.id !== action.payload.id)
            estado.listaMensagens = [...listaTemporaria, action.payload]
           
        },
        excluir: (estado, action) => {
            estado.listaMensagens = estado.listaMensagens.filter(mensagem => mensagem.id !== action.payload.id)
        }
    }
})

export const {inserir, editar, excluir} = mensagemSlicer.actions;
export default mensagemSlicer.reducer;