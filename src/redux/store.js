import { configureStore } from "@reduxjs/toolkit"
import mensagemSlicer from "./mensagemSlicer"
import usuarioSlicer from "./usuarioSlicer"

const store = configureStore({
    reducer : {
        usuario: usuarioSlicer,
        mensagens: mensagemSlicer,
    }
})

export default store;