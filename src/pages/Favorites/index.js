import React, {useState, useContext, useEffect} from 'react';

import Header from '../../components/Header';
import ListView from '../../components/ListView';
import {AuthContext} from '../../contexts/auth';

import {
  getPokemons,
  getPokemonByName,
  formatItems,
  formatDetail,
} from '../../services/pokemonApi';

import {
  Background,
  TitleContainer,
  Title,
  SearchInputContainer,
  SearchInputSection,
  SearchInputButton,
  SearchInputIcon,
  SearchInput,
} from './styles';

export default function Favorites() {
  const {favorities, getAllFavorities} = useContext(AuthContext);

  useEffect(() => {
    loadPokemons();
  }, []);

  
  async function loadPokemons() {
    await getAllFavorities();
  }

  const reloadFavorities = function () {
    loadPokemons()
  }

  return (
    <Background>
      <TitleContainer>
        <Title>Linsting your{'\n'}favorite Pokemons</Title>
      </TitleContainer>

      <ListView data={favorities} reloadData={reloadFavorities} />
    </Background>
  );
}
