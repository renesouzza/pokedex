import React, {useState, useEffect} from 'react';

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

export default function Search() {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  const [filtering, setFiltering] = useState(false);


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
    setPage(page + 10);
  };

  return (
    <Background>
      <TitleContainer>
        <Title>What Pokemon{'\n'}are you looking for?</Title>
      </TitleContainer>

      <SearchInputContainer>
        <SearchInputSection>
          <SearchInputButton onPress={() => {}}>
            <SearchInputIcon />
          </SearchInputButton>

          <SearchInput
            placeholder="Search Pokemon"
            autoCorrect={false}
            autoCapitalize="none"
            value={filter}
            onChangeText={filter => setFilter(filter)}
          />
        </SearchInputSection>
      </SearchInputContainer>

      <ListView data={data} reloadData={reloadData} nextPage={nextPage} />
    </Background>
  );
}
