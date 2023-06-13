import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

// import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Movie</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <a to="/register"> Criar contar</a>
      </Form>
      <Background />
    </Container>
  );
}
