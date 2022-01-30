import React, {useEffect, useState} from "react";
import {updateGame,} from "./updateGame";
import {copyArr} from "./copyArr";

export const CellsTable: React.FC<{ isActive: boolean }> = ({isActive}) => {
    const [arr, setArr] = useState(Array.from(
        {length: innerHeight / 20 - 4},
        () => Array.from({length: Math.floor(innerWidth / 20)-9}, () => 0)
    ))

    useEffect(() => {
        let interval: NodeJS.Timer
        if (isActive) interval = setInterval(() => updateGame(arr, setArr), 140,);
        return () => interval && clearInterval(interval)
    }, [isActive, arr, setArr])

    const handleClick = (i: number, j: number) => {
        const tempArr = copyArr(arr)
        tempArr[i][j] = +!tempArr[i][j]
        setArr(copyArr(tempArr))
    }

    return <table>
        <tbody>
        {arr.map((line, i) =>
            <tr key={`row${i}`}>
                {line.map((cell, j) => <td
                    key={`cell${i}${j}`}
                    onClick={() => handleClick(i, j)}
                    className={cell ? 'cell-on' : undefined}/>)}
            </tr>)}
        </tbody>
    </table>
}