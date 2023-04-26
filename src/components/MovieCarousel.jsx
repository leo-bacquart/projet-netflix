import * as React from "react";
import * as API from "./callAPI.jsx";
import '../style/Carousel.scss'
import {Link, Route} from "react-router-dom";
import Details from "../Pages/Details.jsx";
import Search from "./Search.jsx";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const List = ({params, children}) => { /* params = paramètres de recherche dans l'API, children = Prend en paramètre le contenu de la balise */
    const [movieList, setMovieList] = React.useState([]) /* Création state MovieList, définition par un tableau vide */
    const [transitionPx, setTransitionPx] = React.useState(0)
    const [isTransition, setIsTransition] = React.useState(false)
    React.useEffect(() => {
        /* Call GET API  */
        fetch(`${API.ID}${params}?api_key=${API.KEY}`) /* Lien d'appel de l'api */
            .then((response) => response.json())
            .then((data) => {
                
                setMovieList(data.results);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [] /* Pas de dépendance, la fonction s'éxécute une seule fois */)

    const next = () => {
        setIsTransition(true)
        if(transitionPx <= -3051) {
            setTransitionPx(-3051)   /* Pour definir une limite */
        }else {
            setTransitionPx(transitionPx - 193)
        }
    }
    const prev = () => {
        setIsTransition(true)
        if(transitionPx >= 0) {
            setTransitionPx(0)
            setIsTransition(false)
        }else {
            setTransitionPx(transitionPx + 193)
        }
    }
    const transitionDisabled = {
        transition: 'none 0s ease 0s',
        overflow: 'unset',
         transform: 'translate3d(0px, 0px, 0px)'
    }
    const transitionEnabled = {
        transition: 'transform 400ms ease-in-out 0s',
         overflow: 'unset',
         transform: `translate3d(${transitionPx}px, 0px, 0px)`
    }
  
return (
        <div className={'carousel'}>
            <h2>{children}</h2>
          {/* transition: transform 400ms ease-in-out 0s; overflow: unset; transform: translate3d(-191px, 0px, 0px); */}
            <div className="react-multi-carousel-list  ul">
                <ul className="react-multi-carousel-track " 
                style={isTransition === false ?  transitionDisabled : transitionEnabled}>
                {movieList.map((movie) => <Item key={movie.id} movie={movie}/> )} 
                </ul>
                    <button onClick={prev} aria-label="Go to previous slide" class="react-multiple-carousel__arrow react-multiple-carousel__arrow--left " type="button"></button>
                    <button onClick={next} aria-label="Go to next slide" class="react-multiple-carousel__arrow react-multiple-carousel__arrow--right " type="button"></button>
            </div>
{/*         
            <Carousel responsive={responsive} className={'ul'}>               
                {movieList.map((movie) => <Item key={movie.id} movie={movie}/> )} 
            </Carousel> */}
        </div>
    )
}

  const swapIcon = (id) => {
    console.log(localStorage.getItem(""+id)!=null);
    localStorage.setItem(""+id, "true"); 
    
  };

  const isLiked = (id) =>{
    console.log(localStorage.getItem(""+id)!=null);
    return localStorage.getItem(""+id)!=null;
  };

const Item = ({movie}) => {
    const [estSurvol, setEstSurvol] = React.useState(false);
    React.useEffect(() => {
        setEstSurvol(estSurvol)
    }, [estSurvol])
    const handleMouseEnter = () => setEstSurvol(true);
      
      const handleMouseLeave = () => setEstSurvol(false);
      
    //   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    console.log(movie)
    return ( 
        <li className={!estSurvol ? 'react-multi-carousel-item react-multi-carousel-item--active li' : 'react-multi-carousel-item react-multi-carousel-item--active li li--box-shadow'} key={movie.key} 
        style={{flex: '1 1 auto', position: 'relative'}} aria-hidden="false" data-index="0"  
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
         {
                   estSurvol === false 
                   ?
                       <Link to={`details/${movie.id}`}>
                           <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.key + "poster"}/> 
                       </Link>
                   :
                   <div style={{
                    width: "200px",
                    boxShadow: '0px 3px 10px #282727',
                    padding: 0,
                    borderRadius: '8px',
                    maxWidth: '200px'
                    }}>
                    <Link to={`details/${movie.id}`} >
                        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.key + "poster"}
                        style={{
                            width: '100%',
                            objectFit: 'fill',
                            padding: 0
                        }}
                        /> 
                    </Link>
                    <div style={{padding: '1em', borderRadius: '8px', height: 'auto'}}>
                            <h3 style={{marginBottom: '8px'}}>{movie.title}</h3>
                        {/*             BUTTON               */}
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                    <button style={{
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}>
                                        <PlayCircleIcon />
                                    </button>
                                    <button
                                    style={{
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                    >
                                    <AddCircleOutlineIcon />
                                    
                                    </button>
                                
                                    
                                    <button onClick={() => swapIcon(movie.id)}
                                    style={{
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                    >
                                        {isLiked(movie.id) ? <ThumbUpOffAltIcon/>: <ThumbUpAltIcon/>}
                                    
            
                                    </button>
                            </div>
                            <div>
                                        <button
                                        style={{
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                        >
                                        <KeyboardArrowDownIcon />
                                        </button>
                            </div>
                        </div>
                        <div style={{  margin: '16px 0 16px 0'}}>
                            <p style={{
                                color: '#46D369',
                                fontSize: '14px',
                            
                            }}>Recommandé à { (movie.vote_average * 10).toFixed(0)}% </p>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '8px 0 8px 0'}}>
                            <p
                            style={{
                                border: '1px solid white',
                                padding: '2px',
                                fontSize: '13px',
                                width: '24px'
                            }}  
                            >16+</p>
                            <p>16 Episodes <span 
                            style={{
                                border: '1px solid white',
                                padding: '2px',
                                borderRadius: '4px',
                                padding: '0 4px 0 4px'
                            }} 
                            >HD</span></p>
                            </div>
                    
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <p>Sombre</p>
                            <span style={{
                                height: '8px',
                                width: '8px',
                                backgroundColor: '#646464',
                                borderRadius: '100px',
                                margin: '0 4px 0 4px'
                            }}></span>
                            <p>Drame</p>
                            <span style={{
                                height: '8px',
                                width: '8px',
                                backgroundColor: '#646464',
                                borderRadius: '100px',
                                margin: '0 4px 0 4px'
                            }}></span>
                            <p>Vengeance</p>
                        </div>
                    </div>
            </div>
            }
          
      
        </li>
    )
}

export default List

