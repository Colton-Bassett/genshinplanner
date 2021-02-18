function getOreAmount(startingLevel: number, endingLevel: number, stars: string) {
    let result = 0;
    let ore = [0, 0, 9, 0, 42, 42, 62, 87, 117, 248];
    if (stars === "Five") {
        ore = [0, 0, 13, 0, 63, 63, 93, 130, 176, 372];
    }

    for (let i = endingLevel/10; i > startingLevel/10; i--) {
        result += ore[i];
    }
    return result;
}

export default function getDesiredOre(startingLevel: number, startingAscension: number, endingLevel: number, endingAscension: number, stars: string): number {
    let result: number = 0;
    result += getOreAmount(startingLevel, endingLevel, stars);

    return result;
}