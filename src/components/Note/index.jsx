import { Tag } from "../Tag";
import { Container } from "./styles";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => {
            return <Tag key={tag.id} title={tag.name} icon={tag.star} />;
          })}
        </footer>
      )}
    </Container>
  );
}
