import tabelaUsuario from "./tabela/tabelaUsuario";
import formUsuario from "./form/formUsuario";
import { useState } from "react";
import { Container } from 'react-bootstrap';

export default function telaUsuario(){
    const [telaUsu, setTelaUsu] = useState(true);

    return(
        <Container>
            {telaCategorias ? (
                <formUsuario
                    conteudo={setTelaUsu}
                />
            ) : (
                <tabelaUsuario
                    conteudo={setTelaUsu}
                />
            )}
        </Container>
    );
}