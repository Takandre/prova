import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap'


export default function formUsuario(props){
    const { conteudo } = props;


    function insereUsuario(id, nickname, urlAvatar, dataIngresso, mensagens) {
        const novoUsuario = {
            id:id,
            nickname:nickname,
            urlAvatar:urlAvatar,
            dataIngresso:dataIngresso,
            mensagens:mensagens,
        }
        return novoUsuario;
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;

        const id = document.querySelector('#idTag').value;
        const nickname = document.querySelector('#nickname').value;
        const urlAvatar = document.querySelector('#urlavatar').value;

        const usuario = insereUsuario(id, nickname, urlAvatar, []);

        if (form.checkValidity()) {
            e.stopPropagation();
            e.preventDefault();
        }
    }

    return(
        <Container>
            <Form noValidate onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingSelect" label="idTag">
                            <Form.Control type="number" placeholder="num" id="idTag" name="id" required />
                        </FloatingLabel>
                    </Col>

                    <Col>
                        <FloatingLabel controlId="floatingSelect" label="nickname">
                            <Form.Control type="text" placeholder="Nick" id="nickname" name="nickname" required />
                        </FloatingLabel>
                    </Col>

                    <Col>
                        <FloatingLabel controlId="floatingSelect" label="Avatar">
                            <Form.Control type="text" placeholder="url" id="urlAvatar" name="urlAvatar" required />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Button>Cadastrar</Button>
                    <Button>Cadastrados</Button>
                </Row>
                
            </Form>
        </Container>
    )
}