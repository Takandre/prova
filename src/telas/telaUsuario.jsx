import tabelaUsuario from "./tabela/tabelaUsuario";
import formUsuario from "./form/formUsuario";
import { useState } from "react";
import { Container } from 'react-bootstrap';

export default function TelaUsuario(){
    const [TelaUsu, setTelaUsu] = useState(true);

    return(
        <Container>
            {TelaUsu ? (
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