import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import telaUsuario from '../telas/telaUsuario';


export default function Rotas() {
    return (
        <BrowserRouter basename='/SistemaReactGhPages'>
            <Routes>
                <Route path='/' element={<telaUsuario/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}