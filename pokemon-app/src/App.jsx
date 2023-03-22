import { useEffect, useState } from "react";
import "./App.css";
import shuffle from "../public/shuffle.png";
import pokeball from "../public/pokeball.png";
import PokeBio from "./Components/PokeBio";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [index, setIndex] = useState(Math.floor(Math.random() * 40));
  const [generatedPokemon, setGeneratedPokemon] = useState({
    name: "bulbasaur",
    types: ["grass", "poison"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    height: 7,
    weight: 69,
  });
  const [bannedList, setBannedList] = useState([]);

  async function fetchData() {
    for (let i = 1; i < 40; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await axios.get(url);
      let pokemonData = response.data;
      let types = pokemonData.types;
      types = types.map((data) => {
        return data.type.name;
      });
      let pokemonObject = {
        name: pokemonData.name,
        types: types,
        image: pokemonData.sprites.other.dream_world.front_default,
        height: pokemonData.height,
        weight: pokemonData.weight,
      };
      setPokemon((pokemons) => [...pokemons, pokemonObject]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function generatePokemon() {
    setIndex(Math.floor(Math.random() * 40));
    setGeneratedPokemon(pokemon[index]);
  }

  return (
    <div className="App">
      <div className="upperSection">
        <div className="textSection">
          <h1 id="mainTitle">Gotta Catch 'Em All!</h1>
          <button id="generate" onClick={generatePokemon}>
            <p id="generateText">Generate Pokemon</p>
            <img id="shuffle" src={shuffle}></img>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="pokeBioSection">
          <div className="upperBio">
            <h3 id="pokemonName">{generatedPokemon.name}</h3>
            <div className="typeOuterContainer">
              {generatedPokemon.types.map((type) => {
                return (
                  <div
                    className="typeContainer"
                    value={type}
                    onClick={() => {
                      if(!bannedList.includes(type)){
                        setBannedList((bannedTypes) => [...bannedTypes, type]);
                      }
                    }}
                  >
                    <p className="type" value={type}>
                      {type}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mainBio">
            <div className="bioImage">
              <img
                id="image"
                src={generatedPokemon.image}
                width={225}
                height={225}
              ></img>
            </div>
            <div className="bioBio">
              <div className="heightSection">
                <p className="header">Height</p>
                <p id="height">{generatedPokemon.height / 10} m</p>
              </div>
              <div className="weightSection">
                <p className="header">Weight</p>
                <p id="weight">{generatedPokemon.weight / 10} kg</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bannedTypes">
          <h3 id="bannedHeader">Banned Types</h3>
          <ul>
            {bannedList &&
              bannedList.map((banned) => {
                return <li>{banned}</li>;
              })}
          </ul>
        </div>
      </div>
      <img id="pokeball" src={pokeball} width={250}></img>
    </div>
  );
}

export default App;
