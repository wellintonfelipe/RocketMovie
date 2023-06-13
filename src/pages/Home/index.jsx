import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { Button } from "../../components/Button";

import { Container, Content } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Section title="Meus Filmes">
          <Note
            data={{
              title: "Interestellar",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta unde aliquam consequatur culpa dolor nam harum quam? Quis vel, dicta earum voluptatem similique, natus consequatur consequuntur iusto modi id ducimus?",
              tags: [
                {
                  id: "1",
                  name: "Drama",
                },
                {
                  id: "2",
                  name: "Ficção Cientifica",
                },
              ],
            }}
          />
        </Section>
        <Button title="+ Adicionar Filme" />
      </Content>
    </Container>
  );
}
