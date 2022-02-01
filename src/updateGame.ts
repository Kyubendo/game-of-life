import {copyArr} from "./Utils/copyArr";

const shiftCoordinate = (arr: number[][], base: number, shift: number, isI: boolean) => {
    const length = isI ? arr.length : arr[0].length;
    const shifted = base + shift;
    if (shifted === -1) return length-1;
    else if (shifted === length) return 0;
    else return shifted;
}
const vicinityCellsCount = (arr: number[][], x: number, y: number) => {
    let cellCount = 0;
    for (let i = -1; i < 2; i++) for (let j = -1; j < 2; j++) {
        if (!i && !j) continue;
        const [x1, y1] = [shiftCoordinate(arr, x, i, true), shiftCoordinate(arr, y, j, false)];
        if (arr[x1][y1]) cellCount++;
    }
    return cellCount
}
export const updateGame = (arr: number[][], setArr: (arr: number[][]) => void) => {
    const tempArr = copyArr(arr)
    for (let i = 0; i < arr.length; i++) for (let j = 0; j < arr[0].length; j++) {
        const count = vicinityCellsCount(arr, i, j)
        if ((!arr[i][j]) && count === 3) tempArr[i][j] = 1;
        else if ((arr[i][j]) && (count < 2 || count > 3)) tempArr[i][j] = 0;
    }
    setArr(copyArr(tempArr))
}
