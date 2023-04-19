import React, { useState } from "react";
import loupe from '../assets/loupe.svg';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div>
      {isOpen ? (
        <div>
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button onClick={handleClose}>Fermer</button>
        </div>
      ) : (
        <button onClick={handleOpen}>
          <img src={loupe} alt="loupe barre de recherche"></img>
        </button>
      )}
    </div>
  );
}

export default SearchBar;