import React, {useCallback, useState} from 'react';
import {CellsTable} from "./CellsTable";
import {createInitialArray} from "./Utils/createInitialArray";

function App() {
    const [isActive, setIsActive] = useState(false)
    const [arr, setArr] = useState(createInitialArray('glider'))
    const clearArray = useCallback(() => setArr(createInitialArray()), [setArr])

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
