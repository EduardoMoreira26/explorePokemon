import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  padding: 20px;
  margin: 0 auto;
  height: 800px;

  @media (max-width: 720px) {
    max-width: 700px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    font-weight: bold;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const PokemomInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
  }

  .backgroundImg {
    background-color: #1f1f1f;
    border-radius: 50%;
  }

  img {
    width: 200px;
    height: 200px;
  }

  div {
    margin-left: 24px;

    strong {
      font-size: 48px;
      color: #3d3d3d;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 40px;

    li {
      text-align: center;
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d3d;
      }

      span {
        display: block;
        margin-top: 5px;
        color: #6c6c6c;
      }
    }
  }

  @media (max-width: 720px) {
    img {
      width: 150px;
      height: 150px;
    }

    div {
      margin-left: 10px;

      strong {
        font-size: 32px;
      }
    }

    ul {
      text-align: center;

      li {
        margin: 10px 20px;

        & + li {
          margin-left: 20px;
        }

        strong {
          font-size: 30px;
        }
      }
    }
  }
`;
