import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: rgba(255, 133, 155, 0.05);

  border: none;
  border-radius: 10px;
  margin: 12px;
  padding: 32px 32px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.white};

  > h1 {
    flex: 1;
    margin-bottom: 10px;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
  }
  > p {
    font-size: 14px;
    text-align: left;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;
