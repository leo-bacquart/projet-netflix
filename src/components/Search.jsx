import React, { useEffect, useState } from "react";
import '../style/Search.scss'
import loupe from '../assets/loupe.svg';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

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
