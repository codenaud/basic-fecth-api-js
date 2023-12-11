console.log('Hola pokemon!');

const input = document.querySelector('input');
const btn = document.querySelector('button');
const pokemonContainer = document.querySelector('.pokemon-container');

console.log(input, btn, pokemonContainer);

btn.addEventListener('click', (e) => {
  e.preventDefault();
  getPokemon(input.value);
});

// https://pokeapi.co/api/v2/pokemon/{id or name}/
function getPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((response) => response.json())
    .then((data) => createPokemon(data));
}

function createPokemon(pokemon) {
  const img = document.createElement('img');
  img.src = pokemon.sprites.front_default;

  const h3 = document.createElement('h3');
  h3.textContent = pokemon.name;

  const div = document.createElement('div');
  div.appendChild(img);
  div.appendChild(h3);

  pokemonContainer.appendChild(div);
}
