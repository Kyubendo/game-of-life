import React, {useState} from 'react';
import {CellsTable} from "./CellsTable";

function App() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="App">
            <header className="App-header">
                <CellsTable isActive={isActive}/>
                <button className={'circle-button'} onClick={() => setIsActive(!isActive)}>activate</button>
            </header>
        </div>
    );
}

export default App;
