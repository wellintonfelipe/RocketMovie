import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-rows: 140px auto;
  grid-template-areas:
    "header "
    "content ";
  background-color: ${({ theme }) => theme.colors.background_800};
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;
  position: relative;

  > Button {
    background-color: ${({ theme }) => theme.colors.pink};
    width: 30%;

    position: absolute;
    top: 0;
    right: 10px;
  }
`;
