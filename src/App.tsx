import React, {useState} from 'react';
import {CellsTable} from "./CellsTable";
import {createZeroArray} from "./Utils/createZeroArray";

function App() {
    const [isActive, setIsActive] = useState(false)
    const [arr, setArr] = useState(createZeroArray())
    const clearArray = () => setArr(createZeroArray())

    return (
        <div className="App">
            <CellsTable arr={arr} setArr={setArr} isActive={isActive}/>
            <div className={'centred'}>
                <button className={'circle-button'} onClick={() => setIsActive(!isActive)}>
                    {isActive ? 'Pause' : 'Play'}
                </button>
                <button className={'circle-button'} onClick={clearArray}>
                    Clear
                </button>

            </div>
        </div>
    );
}

export default App;
