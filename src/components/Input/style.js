import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background_900};

  color: ${({ theme }) => theme.colors.pink};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 26px;
    margin-left: 8px;

    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    border: 0;

    &::placeholder {
      border: 0;
      color: ${({ theme }) => theme.colors.gray_100};
    }
  }
`;
