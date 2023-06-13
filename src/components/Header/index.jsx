import { Container, Profile, Logout } from "./style";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input placeholder="Pesquisar pelo titulo" />
      <Profile to="/profile">
        <div>
          <strong>Wellinton Felipe</strong>
          <Logout>sair</Logout>
        </div>

        <img
          src="https://github.com/wellintonfelipe.png"
          alt="Avatar Git Hub"
        />
      </Profile>
    </Container>
  );
}
