import React, { useEffect, useState } from "react";
import '../style/Search.scss'
import loupe from '../assets/loupe.svg';
import * as API from "./callAPI.jsx";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  React.useEffect(() => {
    if (searchTerm.length > 0) {
      const timer = setTimeout(() => {
        fetch(`${API.ID}/search/movie?api_key=${API.KEY}&language=fr&query=${searchTerm}&page=1&include_adult=false`) /* Lien d'appel de l'api */
            .then((response) => response.json())
            .then((data) => {
              setSearchResults(data.results);
              console.log(searchResults);
            })
            .catch((error) => {
              console.log(error.message);
            });
            },1000)
    }
    if (searchTerm.length === 0) {
      setSearchResults([]);
      console.log(searchResults);
    }

    }, [searchTerm])




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
            {/* //TODO map */}
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
