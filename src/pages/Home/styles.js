import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 20px;

  @media (max-width: 720px) {
    max-width: 700px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  max-width: 700px;
  margin: 0 auto;

  input {
    flex: 1;
    height: 46px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &:hover {
      color: #3a3a3a;
    }

    @media (max-width: 720px) {
      height: 60px;
      width: 200px;
      padding: 10px;
      border-radius: 5px;
      border: 2px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border-radius: 0 5px 5px 0;
    background-color: #e43;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#e43')};
    }

    p {
      margin-right: 10px;
    }

    @media (max-width: 720px) {
      height: 50px;
      font-size: 12px;
      width: 200px;
      border-radius: 5px;
      margin-top: 5px;
    }
  }

  @media (max-width: 720px) {
    max-width: 200px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  font-size: 14px;
  max-width: 700px;
  margin: 8px auto;

  @media (max-width: 720px) {
    text-align: center;
  }
`;

export const List = styled.div`
  margin-top: 60px;
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
