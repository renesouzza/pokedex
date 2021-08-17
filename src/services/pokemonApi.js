import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';
const itemsPerPage = 20;

export const getPokemons = (page = 0) => {
  return axios.get(
    `/pokemon?limit=${itemsPerPage}&offset=${itemsPerPage * page}`,
  );
};

export const getPokemonByName = (name = '') => {
  return axios.get(`/pokemon/${name}`);
};

export const formatItems = item => {
  return {
    id: item.url
      .replace('https://pokeapi.co/api/v2', '')
      .replace(/[^\d]+/g, ''),
    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.url
      .replace('https://pokeapi.co/api/v2', '')
      .replace(/[^\d]+/g, '')}.png`,
  };
};

const getDetails = pokemon => {
  return pokemon.map(item => {
    return {name: item.type.name};
  });
};

export const formatDetail = item => {
  return {
    id: item.id,
    color: formatColor(item),
    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
    image: item.sprites.other['official-artwork'].front_default,
    types: formatTypes(item),
    abilities: formatAbilities(item),
    moves: formatMoves(item),
    stats: formatStats(item),
  };
};

const formatTypes = pokemon => {
  return pokemon.types.map(item => {
    return {name: item.type.name};
  });
};

const formatAbilities = pokemon => {
  return pokemon.abilities.map(item => {
    return {name: item.ability.name};
  });
};

const formatMoves = pokemon => {
  return pokemon.moves.map(item => {
    return {name: item.move.name};
  });
};

const formatStats = pokemon => {
  return pokemon.stats.map(item => {
    return {
      name: item.stat.name,
      base_stat: item.base_stat,
      effort: item.effort,
    };
  });
};

const formatColor = pokemon => {
  let type = pokemon.types[0].type.name;
  let color;
  {
    switch (type) {
      case 'grass':
        color = 'rgb(86, 208, 176)';
        break;
      case 'fire':
        color = 'rgb(243, 106, 107)';
        break;
      case 'water':
        color = 'rgb(118, 188, 251)';
        break;
      case 'electric':
        color = 'rgb(255, 206, 75)';
        break;
      case 'bug':
        color = 'rgb(125, 83, 140)';
        break;
      case 'ground':
        color = 'rgb(174, 112, 105)';
        break;
      default:
        color = 'rgb(174, 112, 105)';
        break;
    }
  }

  return color;
};
