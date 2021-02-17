function getExpMoraCost(startingLevel: number, endingLevel: number) {
    const moraLevelCost = [0, 0, 28000, 0, 116000, 116000, 172000, 240000, 324000, 688000];
    let result = 0;
    for (let i = endingLevel/10; i > startingLevel/10; i--) {
        result += moraLevelCost[i];
    }
    return result;
}

function getAscensionMoraCost(startingAscension: number, endingAscension: number): number {
    let result = 0;
    const ascensionMoraCost = [0, 20000, 40000, 60000, 80000, 100000, 120000];
    for (let i = endingAscension; i > startingAscension; i--) {
        result += ascensionMoraCost[i];
    }

    return result;
}

export default function getDesiredLevelMoraCost(startingLevel: number, startingAscension: number, endingLevel: number, endingAscension: number): number {
    let result: number = 0;
    result += getExpMoraCost(startingLevel, endingLevel);
    result += getAscensionMoraCost(startingAscension, endingAscension);

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