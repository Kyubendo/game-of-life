export const createZeroArray = () => Array.from(
    {length: innerHeight / 20 - 4},
    () => Array.from({length: Math.floor(innerWidth / 20) - 9}, () => 0)
)