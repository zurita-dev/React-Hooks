import { useState, useEffect } from "react";
import Character from "./Character";
import "./styles/Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Characters container-characters mr-2 ml-2">
      {characters.map((character) => (
        <Character data={character} key={character.id}></Character>
      ))}
    </div>
  );
};

export default Characters;
