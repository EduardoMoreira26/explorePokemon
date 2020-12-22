import React from 'react';

import { Container, Header, LogoPokemom } from './styles';

import Logo from '../../assets/Pokemon_logo.svg';

const Menu = () => (
  <Container>
    <Header>
      <LogoPokemom src={Logo} alt="Pokemom Explorer" />
    </Header>
  </Container>
);

export default Menu;
