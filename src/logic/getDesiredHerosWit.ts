function getHerosWitAmount(startingLevel: number, endingLevel: number) {
    const herosWit = [0, 0, 7, 0, 29, 29, 43, 60, 81, 172];
    let result = 0;
    for (let i = endingLevel/10; i > startingLevel/10; i--) {
        result += herosWit[i];
    }
    return result;
}

export default function getDesiredHerosWit(startingLevel: number, startingAscension: number, endingLevel: number, endingAscension: number): number {
    let result: number = 0;
    result += getHerosWitAmount(startingLevel, endingLevel);

    return result;
}

// const example1 = getDesiredLevelMoraCost(0, 0, 90, 6);
// const example2 = getDesiredLevelMoraCost(0, 0, 60, 3);
// const example3 = getDesiredLevelMoraCost(50, 3, 80, 5);
// const example4 = getDesiredLevelMoraCost(80, 5, 90, 6);

// console.log(`Example 1: ${example1}.`);
// console.log(`Example 2: ${example2}.`);
// console.log(`Example 3: ${example3}.`);
// console.log(`Example 4: ${example4}.`);