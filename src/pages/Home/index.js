import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Title, Form, List, Error } from './styles';

import Menu from '../../components/Menu';
import CardPokemon from '../../components/CardPokemon';

import Pokeball from '../../assets/pokeball.svg';

const Home = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState(() => {
    const storagedRepositories = localStorage.getItem(
      '@PokemonExplorer:repositories'
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@PokemonExplorer:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);

  const handleAddRepository = async (e) => {
    e.preventDefault();

    if (!newRepo) {
      setInputError('Digite o nome de um Pokémon');
      return;
    }

    try {
      const response = await api.get(`pokemon/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Nome/número inválido.');
    }
  };

  return (
    <>
      <Menu />
      <Container>
        <Title>Capture seus Pokémons</Title>

        <Form hasError={!!inputError} onSubmit={handleAddRepository}>
          <input
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
            placeholder="Pesquise seu Pokémon"
          />
          <button type="submit">
            <p>Capturar</p> <img width={40} src={Pokeball} alt={Pokeball} />
          </button>
        </Form>

        {inputError && <Error>{inputError}</Error>}

        <List>
          {repositories.map((repository) => (
            <CardPokemon
              key={repository.name}
              idPoke={repository.id}
              name={repository.name}
              type={repository.types[0].type.name}
              img={repository.sprites.other.dream_world.front_default}
            />
          ))}
        </List>
      </Container>
    </>
  );
};

export default Home;
