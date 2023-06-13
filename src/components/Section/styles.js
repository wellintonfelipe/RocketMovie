import styled from "styled-components";

export const Container = styled.section`
  grid-area: section;
  max-width: 100%;
  margin: 0 123px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  > h2 {
    margin: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
  }
`;
