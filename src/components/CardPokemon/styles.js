import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;

  a {
    background-color: #fff;
    width: 280px;
    height: 370px;
    display: block;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 0 1px 10px 0 #000;
    transition: transform 0.2s;

    &:hover {
      color: #3a3a3a;
    }

    &:hover {
      transform: translatey(-10px);
    }

    .center {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #1f1f1f;
      height: 280px;
      border-radius: 5px 5px 0 0;
    }

    img {
      max-width: 150px;
      text-align: center;
    }

    .flex {
      display: flex;
      align-items: center;
    }

    div {
      padding: 10px 0 0 10px;
      color: #3a3a3a;

      strong {
        font-weight: bold;
        font-size: 20px;
      }

      p {
        margin: 5px 0;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #e43;
    }
  }
`;
