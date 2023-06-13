import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <a href="/">
              <FiArrowLeft /> Voltar
            </a>
            <h1>Novo Filme</h1>
          </header>
          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota de 0 a 5" />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <MovieItem value="Ficção" />
              <MovieItem isNew placeholder="Novo tag" />
            </div>
          </Section>

          <div>
            <Button title="Excluir filme" />
            <Button title="Salvar" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
