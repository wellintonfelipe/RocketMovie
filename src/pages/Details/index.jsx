import { Container, Content } from "./styles.js";
import { FiClock, FiArrowLeft } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <a href="/">
            {" "}
            <FiArrowLeft />
            Voltar
          </a>
          <h1>Interestellar</h1>
          <span>
            <img
              src="https://github.com/wellintonfelipe.png"
              alt="avatar git hub"
            />
            wellinton Felipe 23/05/2022 <FiClock />
          </span>
          <div>
            <Tag title="Ficção Cientifica" />
            <Tag title="Drama" />
            <Tag title="Família" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            ipsam laboriosam aliquid tempora quam earum. Amet beatae magni,
            minus atque impedit, quasi facere corporis eum fugit commodi quas
            officiis tempore. Nihil, nostrum iusto pariatur minima iste aliquid
            error voluptate cumque, ipsa quaerat a soluta ullam debitis. Dicta
            consectetur fuga expedita, cum, quam sequi nisi quasi odit iusto
            deserunt minus atque! Totam accusamus ipsa impedit quos modi
            obcaecati cupiditate sit nobis. Dolorem sequi ab repudiandae
            perspiciatis non blanditiis id? Possimus ullam aliquam vero
            temporibus fuga tempore voluptatem dolor molestias nostrum omnis.
            Sed earum quibusdam sunt quia, libero commodi eum asperiores itaque
            quidem molestiae placeat dolor. Quidem, perferendis obcaecati.
            Excepturi minima incidunt adipisci laborum rem iste natus assumenda
            ducimus, voluptate architecto quasi. Quia esse quisquam odio neque
            fugit accusamus deleniti similique magnam consequatur? Libero,
            dignissimos quis voluptas hic modi consectetur rerum dolor{" "}
          </p>
        </Content>
      </main>
    </Container>
  );
}
