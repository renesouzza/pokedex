import React, {useState, useContext, useEffect} from 'react';

import Header from '../../components/Header';
import ListView from '../../components/ListView';

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

export default function Home() {

  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  const [filtering, setFiltering] = useState(false);

  useEffect(() => {
    async function loadPokemons() {
      await getPokemons(page)
        .then(response => {
          const result = response.data.results.map(item => {
            return formatItems(item);
          });

          if (page == 0) {
            setData([]);
            setData(result);
          } else {
            setData([...data, ...result]);
          }
        })
        .catch(err => {
          console.error('ops! ocorreu um erro' + err);
        });
    }

    !filtering && loadPokemons();
  }, [page]);

  useEffect(() => {
    async function searchPokemon(filter) {
      await getPokemonByName(filter)
        .then(response => {
          const result = formatDetail(response.data);

          setData([]);
          setData([result]);
        })
        .catch(err => {
          console.error('ops! ocorreu um erro' + err);
        });
    }

    setFiltering(!!filter);
    !!filter && searchPokemon(filter);
    !filter && reloadData();
  }, [filter]);

  const reloadData = function () {
    setPage(0);
  };

  const nextPage = function () {
    setPage(page + 1);
  };

  return (
    <Background>
      <TitleContainer>
        <Title>Linsting{'\n'}all Pokemons</Title>
      </TitleContainer>

      <ListView data={data} reloadData={reloadData} nextPage={nextPage} />
    </Background>
  );
}
