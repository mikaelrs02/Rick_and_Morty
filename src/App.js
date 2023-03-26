import React, { Component } from "react";
import Header from "../src/Components/Header.js";
import * as S from "./Components/style.js";
import Main from "../src/Components/Main.js";
import Footer from "../src/Components/Footer.js";
import axios from "axios";

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

class App extends Component {
  render() {
    return (
      <>
        <S.GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;