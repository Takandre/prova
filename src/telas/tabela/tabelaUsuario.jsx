import { Button, Container, Table, Alert } from "react-bootstrap";

export default function tabelaUsuario(props) {
    const { conteudo } = props;

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>nick</th>
                        <th>urlavatar</th>
                        <th>dataingresso</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaUsuarios.map((usuario, index) => (
                            <tr key={index}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nick}</td>
                                <td>{usuario.urlavatar}</td>
                                <td>{usuario.dataIngresso}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Button onClick={() => conteudo(true)}>Novo Usuario</Button>
        </Container>
    )
}
