function getExpMoraCost(startingLevel: number, endingLevel: number, stars: string) {
    let result = 0;
    let moraLevelCost = [0, 0, 9000, 0, 42000, 42000, 62000, 87000, 117000, 248000];

    if (stars === "Five") {
        moraLevelCost = [0, 0, 13000, 0, 63000, 63000, 93000, 130000, 176000, 372000];
    }

    for (let i = endingLevel/10; i > startingLevel/10; i--) {
        result += moraLevelCost[i];
    }
    return result;
}

function getAscensionMoraCost(startingAscension: number, endingAscension: number, stars: string): number {
    let result = 0;
    let ascensionMoraCost = [0, 5000, 15000, 20000, 30000, 35000, 45000];
    if (stars === "Five") {
        ascensionMoraCost = [0, 10000, 20000, 30000, 45000, 55000, 65000];
    }

    for (let i = endingAscension; i > startingAscension; i--) {
        result += ascensionMoraCost[i];
    }

    return result;
}

export default function getDesiredWeaponLevelMoraCost(startingLevel: number, startingAscension: number, endingLevel: number, endingAscension: number, stars: string): number {
    let result: number = 0;
    result += getExpMoraCost(startingLevel, endingLevel, stars);
    result += getAscensionMoraCost(startingAscension, endingAscension, stars);

    return result;
}