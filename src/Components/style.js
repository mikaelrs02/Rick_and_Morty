import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  background: #3B115D;
}
`;

export const Header = styled.header`
  img {
    width: 14rem;
  }
`;

export const Title = styled.h1`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  img {
    border-radius: 10%;
  }
  h2,
  h3 {
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  h2 {
    font-size: 1rem;
  }
`;