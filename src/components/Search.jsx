import React, { useEffect, useState } from "react";
import axios from "axios"; // Importer le module axios pour effectuer des requêtes HTTP
import '../style/Search.scss'
import loupe from '../assets/loupe.svg';
import * as API from './callAPI'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(event) {
    const query = event.target.value;
    setSearchTerm(query);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  const fetchSearch = (query) => {
    fetch(`${API.ID}search/movie?api_key=${API.KEY}&query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results)
        console.log(data.results)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetch(`${API.ID}search/movie?api_key=${API.KEY}&query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results)
        console.log(data.results)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [searchTerm]);

  // Rendu des résultats de recherche
  const resultList = searchResults.map(result => (
    <li key={result.id}>
      {result.title}
    </li>
  ));

  return (
    <div className="Search">
      {isOpen ? (
        <div style={({border: "1px solid white"})}>
          <input
            type="text"
            placeholder="Titres, personne, genre..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <ul>
            {resultList}
          </ul>
          <button onClick={handleClose}>
            <img src={loupe} alt="loupe barre de recherche" className="loupe-icon"></img>
          </button>
        </div>
      ) : (
        <button onClick={handleOpen}>
          <img src={loupe} alt="loupe barre de recherche" className="loupe-icon"></img>
        </button>
      )}
    </div>
  );
}

export default SearchBar;
