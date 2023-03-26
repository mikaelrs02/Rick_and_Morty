import React, { Component } from "react";
import * as S from "./style.js";
import Logo from "../Components/Logo.js";

class Header extends Component {
  render() {
    return (
      <S.Header>
        <Logo image="https://www.hbomax.com/img/hbo-max-h-w-l.svg" />
      </S.Header>
    );
  }
}
export default Header;