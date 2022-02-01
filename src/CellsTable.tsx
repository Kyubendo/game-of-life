import React, {useEffect, useState} from "react";
import {updateGame,} from "./updateGame";
import {copyArr} from "./Utils/copyArr";

export const CellsTable: React.FC<{
    arr: number[][],
    setArr: (arr: number[][]) => void,
    isActive: boolean
}> = ({arr, setArr, isActive}) => {

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