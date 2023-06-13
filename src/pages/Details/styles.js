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
    margin: 24px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 123px;

  display: flex;

  flex-direction: column;

  FiClock {
    background-color: ${({ theme }) => theme.colors.pink};
  }

  FiArrowLeft {
    background-color: ${({ theme }) => theme.colors.pink};
  }

  > span {
    display: flex;
    margin: 10px 0;

    gap: 20px;
    color: ${({ theme }) => theme.colors.gray_100};
  }

  img {
    width: 24px;
    border-radius: 50%;
  }
  div {
    display: flex;
    gap: 20px;

    > Tag {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    margin-top: 12px;
  }
  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`;
