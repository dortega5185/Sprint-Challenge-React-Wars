import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
// components
import StarWarsCard from "./components/StarWarsCard";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('No characters', error);
      });
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {characters.map((characterData, index) => {
        console.log(characterData);
        return (
          <StarWarsCard
            key={index}
            title={characterData.name}
            gender={characterData.gender}
            mass={characterData.mass}
            birth={characterData.birth_year}
          />
        );
      })}
    </div>
  );
}

