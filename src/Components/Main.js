import React, { Component } from "react";
import axios from "axios";
import * as S from "./style.js";

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

class App extends Component {
  state = {
    informacoes: []
  };

  componentDidMount() {
    this.PegarPersonagem();
  }

  PegarPersonagem = async () => {
    const resposta = await Api.get();

    console.log(resposta.data.results);

    const itens = resposta.data.results.map((item) => {
      return {
        ...item
      };
    });

    this.setState({
      informacoes: itens
    });
  };

  render() {
    return (
      <S.Container>
        <S.GlobalStyle />
        <S.Title>
          <h1> Rick and Morty characters </h1>
        </S.Title>
        {this.state.informacoes.map((item) => (
          <S.Box>
            <img src={item.image} alt="" />
            <h2> {item.name} </h2>
            <h3> {item.species} </h3>
          </S.Box>
        ))}
      </S.Container>
    );
  }
}
export default App;
