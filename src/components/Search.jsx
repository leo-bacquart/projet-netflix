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
  const [isEditing, setEditing]= useState(false);
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
    if (!searchTerm){   // si l'input est vide
      setSearchResults([]);
      setSearchInProgress(false);
      return;
    }
    console.info('✅ searching for movies');
    const text = searchTerm;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5c0913b3a2bf3d6729475eaa432c0034&language=en-US&query=${text}&page=1&include_adult=false`;
    fetch(url)  // GET Http request
    .then((res)=> res.json())
    .then(responseJson=>{
      const only10Results = responseJson.results.slice(0, 10); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
      console.log('Got only10Results:', only10Results);
      setSearchResults(only10Results);  // on ajoute le tableau [] dans le state
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

  const searchResultList = useMemo(()=> searchResults.map(r=> ({ id: r.id, value: r.title })), [searchResults]);
 // setSearchTerm(searchTerm)
  
  console.log('results List:', { isEditing, isOpen, searchResultList})
  return (
    <div className="Search">
      {isOpen ? (
        <div style={({border: "1px solid white", height:"40px"})}>
          {/* <DatalistInput
            placeholder="Titres, personne, genre..."
            value={searchTerm}
            setValue={setValue}
            showLabel={false}
            isExpanded={isOpen}
            onSelect={(item) => {
              setValue(''); // clearing input field
              navigate('/details/'+item.id);
              console.log('Just selected:', item)
            }}
            items={searchResultList}
            onChange={handleSearch}
          /> */}
            <form className='autocomplete-container'>
              <div
                className='autocomplete'
                role='combobox'
                aria-expanded='false'
                aria-owns='autocomplete-results'
                aria-haspopup='listbox'
              >
                <input
                  className='autocomplete-input'
                  placeholder='Rechercher un titre'
                  aria-label='Rechercher un titre'
                  aria-autocomplete='both'
                  aria-controls='autocomplete-results'
                  onFocus={()=> { setEditing(true)}}
                  onBlur={(e)=> {
                    console.log('editing is now false')
                     e.preventDefault();
                      setTimeout(()=> {setEditing(false); }, 500); 
                    }}
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              {isEditing && <ul
                id='autocomplete-results'
                className={`autocomplete-results autocomplete-results-ul ${isEditing ? 'hidden' : ''}`}
                style={{ margin: "5px"}}
                role='listbox'
                aria-label='Rechercher un titre'
              >
                {searchResultList.map(item=> <li key={item.id} className="autocomplete-result-item"><div onClick={(e)=>{ 
                  e.preventDefault();
                  console.log('clicked on something')
                  setSearchTerm('');  // vider l'input
                  navigate('/details/'+item.id); 
                  }} >{item.value}</div></li>)}
              </ul>}
            </form>
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
