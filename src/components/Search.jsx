import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DatalistInput, { useComboboxControls } from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';

import '../style/Search.scss'
import loupe from '../assets/loupe.svg';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInProgress, setSearchInProgress] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { setValue, value } = useComboboxControls({ initialValue: '' });
  const navigate = useNavigate();
  // https://developers.themoviedb.org/3/search/search-movies
  React.useEffect(()=> {
    if (searchInProgress){
      return;
    }
    setSearchInProgress(true);
    setTimeout(()=>{
      searchMovies();
    }, 1000);

  }, [searchTerm])

  function searchMovies(){
    if (!searchTerm){ setSearchInProgress(false); return; }
    console.info('✅ searching for movies');
    const text = searchTerm;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5c0913b3a2bf3d6729475eaa432c0034&language=en-US&query=${text}&page=1&include_adult=false`;
    fetch(url)
    .then((res)=> res.json())
    .then(response=>{
      console.log('Got response:', response);
      // const resultList = response.results;
      setSearchResults(response.results);
    })
    .finally(()=>{
      setSearchInProgress(false);
    })
  }


  function handleSearch(event) {
    const searchText = event.target.value;
    // setTriggerSearch(true);
    setSearchTerm(searchText);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  // Rendu des résultats de recherche
  // const resultList = searchResults.map(result => (
  //   <option key={result.id}>
  //     {result.title}
  //   </option>
  // ));

  const searchResultList = useMemo(()=> searchResults.map(r=> ({ id: r.id, value: r.title })));
  
  console.log('results List:', searchResultList)
  return (
    <div className="Search">
      {isOpen ? (
        <div style={({border: "1px solid white"})}>
          <DatalistInput
            placeholder="Titres, personne, genre..."
            value={searchTerm}
            setValue={setValue}
            showLabel={false}
            // isExpanded={isOpen}
            onSelect={(item) => {
              setValue(''); // clearing input field
              navigate('/details/'+item.id);
              console.log('Just selected:', item)
            }}
            items={searchResultList}
            onChange={handleSearch}
          />
          {/* <input
            list="movies-list"
            type="text"
            placeholder="Titres, personne, genre..."
            value={searchTerm}
            onChange={handleSearch}
          /> */}
          {/* <datalist id="movies-list">
             {resultList}
          </datalist> */}
          {/* <ul>
            {resultList}
          </ul> */}
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
