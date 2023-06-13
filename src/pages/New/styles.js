import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .tags {
    display: flex;
    gap: 10px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 8px;
    padding: 10px;
    width: 100%;
  }
`;

export const Form = styled.form`
  margin: 0 123px;

  > header {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: start;
    justify-content: space-between;

    > a {
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.colors.pink};
    }
  }

  > Section {
    width: 100%;
    margin: 0;
  }

  > div {
    display: flex;
    margin: 10px 0;

    gap: 50px;

    Button:nth-child(odd) {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`;
