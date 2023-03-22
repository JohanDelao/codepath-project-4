import { useState } from "react";
import "./App.css";
import shuffle from "../public/shuffle.png";
import pokeball from "../public/pokeball.png";
import PokeBio from "./Components/PokeBio";

function App() {
  const [pokemon, setPokemon] = useState({});
  const url = `https://pokeapi.co/api/v2/pokemon/1`;
  let tempPokemon;
  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    setPokemon(() => {
      return {name: json.name}
    })
  }
  // for (let i=0;i<150;i++){
    
  //   let pokemonData = callAPI(url);
  //   tempPokemon.push(pokemonData);
  // }
  callAPI(url);



  return (
    <div className="App">
      <div className="upperSection">
        <div className="textSection">
          <h1 id="mainTitle">Gotta Catch 'Em All!</h1>
          <button id="generate">
            <p id="generateText">Generate Pokemon</p>
            <img id="shuffle" src={shuffle}></img>
          </button>
        </div>
      </div>
      <div className="container">
        <PokeBio
          name="Bulbasaur"
          types={["grass", "poison"]}
          image={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          }
          height={7}
          weight={69}
        />
        <div className="bannedTypes">
          <h3 id="bannedHeader">Banned Types</h3>
        </div>
      </div>
      <img id="pokeball" src={pokeball} width={250}></img>
    </div>
  );
}

export default App;
