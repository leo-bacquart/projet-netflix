import * as React from 'react';
import './App.css'

function App() {
    const [trending, setTrending] = React.useState();
    React.useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=5c0913b3a2bf3d6729475eaa432c0034&page=1')
            .then(response => response.json())
            .then(json => setTrending(json))
            .catch(error => console.log(error))

        console.log(trending)
    })


    return (
        <div>
            <h1>Netflix</h1>
        </div>
    )
}



export default App
