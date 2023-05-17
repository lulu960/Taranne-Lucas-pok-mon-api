import React  from "react";

function PokemonList({ searchTerm = "" }) {
  const urlAPI = `https://pokeapi.co/api/v2/pokemon?limit=100`;
  const [list, setList] = React.useState([]);

  fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => {
      setList(data.results);
    });

    return (
        <ul>
            {list.filter((pokemon) => {
                    return pokemon.name.includes(searchTerm);
                })
                  .map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </ul>
    );
}

export default PokemonList;