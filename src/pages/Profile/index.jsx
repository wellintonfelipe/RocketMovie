import { Container, Form, Avatar } from "./styles";
import { FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";

import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

// import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <header>
        <a to="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/wellintonfelipe.png"
            alt="Avatar users"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha Atual" type="password" icon={FiLock} />
        <Input placeholder="Nova Senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
