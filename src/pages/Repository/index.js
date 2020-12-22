import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/Pokemon_logo.svg';

import { Container, Header, PokemomInfo } from './styles';

const Repository = () => {
  const [repository, setRepository] = useState(null);
  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`pokemon/${params.repository}`).then((response) => {
      setRepository(response.data);
    });
  }, [params.repository]);

  return (
    <Container>
      <Header>
        <img width={200} src={logo} alt="Pokémon Explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <PokemomInfo>
          <header>
            <div className="backgroundImg">
              <img
                src={repository.sprites.other.dream_world.front_default}
                alt={repository.sprites.other.dream_world.front_default}
              />
            </div>
            <div>
              <strong>{repository.name}</strong>
            </div>
          </header>

          <ul>
            <li>
              <strong>Tipo</strong>
              <span>{repository.types[0].type.name}</span>
            </li>
            <li>
              <strong>Habilidade</strong>
              <span>{repository.abilities[0].ability.name}</span>
            </li>
            <li>
              <strong>Altura</strong>
              <span>{repository.height}</span>
            </li>
            <li>
              <strong>Peso</strong>
              <span>{repository.weight}</span>
            </li>
          </ul>
        </PokemomInfo>
      )}
    </Container>
  );
};

export default Repository;
