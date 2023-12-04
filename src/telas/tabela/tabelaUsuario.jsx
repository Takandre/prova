import { Button, Container, Table} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

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
            </Table>
            <Button onClick={() => conteudo(true)}>Novo Usuario</Button>
        </Container>
    )
}
