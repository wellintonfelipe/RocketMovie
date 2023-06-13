import styled from "styled-components";

// import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 105px;
  background-color: ${({ theme }) => theme.colors.background_800};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background_700};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 80px;

  > h1 {
    color: ${({ theme }) => theme.colors.pink};
  }
  > input {
    height: 26px;

    width: 50%;
    padding: 24px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.background_700};
    border: 0;
    border-radius: 8px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_100};
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    line-height: 24px;

    span {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.gray_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.gray_100};
    }
  }
`;
export const Logout = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.gray_300};
`;
