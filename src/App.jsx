import * as React from 'react';
import './App.css'

function App() {
    const [trending, setTrending] = React.useState([])

    return (
        <div>
            <Search donnee1={'3'}></Search>
        </div>
    )
}



export default App
