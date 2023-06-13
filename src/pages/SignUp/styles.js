import styled from "styled-components";

import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.colors.pink};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    margin-bottom: 24px;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray_100};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
