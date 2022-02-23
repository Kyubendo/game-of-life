export const createInitialArray = (template?: 'glider') => {
    const arr = Array.from(
        {length: innerHeight / 20 - 4},
        () => Array.from({length: Math.floor(innerWidth / 20) - 9}, () => 0)
    )
    switch (template) {
        case "glider":
            const [i, j] = [Math.floor(arr.length / 2), Math.floor(arr[0].length / 2)]
            for (let k = -1; k < 2; k++) arr[i + 1][j + k] = 1
            arr[i][j + 1] = 1
            arr[i - 1][j] = 1
    }
    return arr
}