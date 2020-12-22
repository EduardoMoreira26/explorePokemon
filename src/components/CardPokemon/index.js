/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

const CardPokemom = ({ idPoke, name, img, type }) => (
  <Container>
    <Link to={`/repositories/${name}`}>
      <div className="center">
        <img src={img} alt={img} />
      </div>
      <div className="flex">
        <div>
          <strong>
            {idPoke} - {name}
          </strong>
          <p>Tipo: {type}</p>
        </div>
        <FiChevronRight size={36} />
      </div>
    </Link>
  </Container>
);
export default CardPokemom;
