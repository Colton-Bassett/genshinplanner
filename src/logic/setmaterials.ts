const ascensionCosts = {
    one : { matOne: 1, matTwo: 0, specialty: 3, commonMat: 3, mora: 44000, heroswit: 7 },
    two : { matOne: 3, matTwo: 2, specialty: 10, commonMat: 15, mora: 155600, heroswit: 29 },
    three : { matOne: 6, matTwo: 4, specialty: 20, commonMat: 12, mora: 175800, heroswit: 29 },
    four : { matOne: 3, matTwo: 8, specialty: 30, commonMat: 18, mora: 250800, heroswit: 43 },
    five : { matOne: 6, matTwo: 12, specialty: 45, commonMat: 12, mora: 339000, heroswit: 60 },
    six : { matOne: 6, matTwo: 20, specialty: 60, commonMat: 24, mora: 442200, heroeswit: 81 },
}

// Ascension : Level : Ascension Mora : EXP Mora : Wit

// 1                 : 20     : 20,000                : 24,000      : 7
// 2                 : 40     : 40,000               : 115,600.    : 29
// 3                 : 50     : 60,000               : 115,800.    : 29
// 4                 : 60     : 80,000               : 170,800.    : 43
// 5                 : 70      : 100,000             : 239,000.   : 60
// 6                 : 80.     : 120,000             : 322,200.   : 81

const talentCosts = {
    two : { talentMaterial: 3, commonMat: 6, bossMat: 0, crown: 0, mora: 12500 },
    three : { talentMaterial: 2, commonMat: 3, bossMat: 0, crown: 0, mora: 17500 },
    four : { talentMaterial: 4, commonMat: 4, bossMat: 0, crown: 0, mora: 25000 },
    five : { talentMaterial: 6, commonMat: 6, bossMat: 0, crown: 0, mora: 30000 },
    six : { talentMaterial: 9, commonMat: 9, bossMat: 0, crown: 0, mora: 37500 },
    seven : { talentMaterial: 4, commonMat: 4, bossMat: 1, crown: 0, mora: 120000 },
    eight : { talentMaterial: 6, commonMat: 6, bossMat: 1, crown: 0, mora: 260000 },
    nine : { talentMaterial: 12, commonMat: 9, bossMat: 2, crown: 0, mora: 450000 },
    ten : { talentMaterial: 16, commonMat: 12, bossMat: 2, crown: 1, mora: 700000 }

}

function getMatOne(matOne: any, level: number) {
    switch(level) {
        case 1:        
            return matOne + "_Sliver";
        case 2:
            return matOne + "_Fragment";
        case 3:
            return matOne + "_Fragment";
        case 4:
            return matOne + "_Chunk";
        case 5:
            return matOne + "_Chunk"
        case 6:
            return matOne + "_Gemstone"
    }
}

function getMatOneAmount(level: number) {
    switch(level) {
        case 1:
            return ascensionCosts.one.matOne;
        case 2:
            return ascensionCosts.two.matOne;
        case 3:
            return ascensionCosts.three.matOne;
        case 4:
            return ascensionCosts.four.matOne;
        case 5:
            return ascensionCosts.five.matOne;
        case 6:
            return ascensionCosts.six.matOne;
    }
}

function getMatTwoAmount(level: number) {
    switch(level) {
        case 1:
            return ascensionCosts.one.matTwo;
        case 2:
            return ascensionCosts.two.matTwo;
        case 3:
            return ascensionCosts.three.matTwo;
        case 4:
            return ascensionCosts.four.matTwo;
        case 5:
            return ascensionCosts.five.matTwo;
        case 6:
            return ascensionCosts.six.matTwo;
    }
}

function getSpecialtyAmount(level: number) {
    switch(level) {
        case 1:
            return ascensionCosts.one.specialty;
        case 2:
            return ascensionCosts.two.specialty;
        case 3:
            return ascensionCosts.three.specialty;
        case 4:
            return ascensionCosts.four.specialty;
        case 5:
            return ascensionCosts.five.specialty;
        case 6:
            return ascensionCosts.six.specialty;
    }
}

function getCommonMat(commonMaterial: any, level: number) {
    switch(commonMaterial) {
        case "Slime_Condensate":        
            if (level === 1 || level === 2) {
                return "Slime_Condensate"
            }
            else if (level === 3 || level === 4) {
                return "Slime_Secretions"
            }
            else {
                return "Slime_Concentrate"
            }
        case "Damaged_Mask":
            if (level === 1 || level === 2) {
                return "Damaged_Mask"
            }
            else if (level === 3 || level === 4) {
                return "Stained_Mask"
            }
            else {
                return "Ominous_Mask"
            }
        case "Firm_Arrowhead":
            if (level === 1 || level === 2) {
                return "Firm_Arrowhead"
            }
            else if (level === 3 || level === 4) {
                return "Sharp_Arrowhead"
            }
            else {
                return "Weathered_Arrowhead"
            }
        case "Divining_Scroll":
            if (level === 1 || level === 2) {
                return "Divining_Scroll"
            }
            else if (level === 3 || level === 4) {
                return "Sealed_Scroll"
            }
            else {
                return "Forbidden_Curse_Scroll"
            }
        case "Treasure_Hoarder_Insignia":
            if (level === 1 || level === 2) {
                return "Treasure_Hoarder_Insignia"
            }
            else if (level === 3 || level === 4) {
                return "Silver_Raven_Insignia"
            }
            else {
                return "Golden_Raven_Insignia"
            }
        case "Recruit's_Insignia":
            if (level === 1 || level === 2) {
                return "Recruit's_Insignia"
            }
            else if (level === 3 || level === 4) {
                return "Sergeant's_Insignia"
            }
            else {
                return "Lieutenant's_Insignia"
            }
        case "Whopperflower_Nectar":
            if (level === 2) {
                return "Whopperflower_Nectar"
            }
            else if (level === 3 || level === 4 || level === 5 || level === 6) {
                return "Shimmering_Nectar"
            }
            else {
                return "Energy_Nectar"
            }
    }
}

function getCommonMatAmount(level: number) {
    switch(level) {
        case 1:
            return ascensionCosts.one.commonMat;
        case 2:
            return ascensionCosts.two.commonMat;
        case 3:
            return ascensionCosts.three.commonMat;
        case 4:
            return ascensionCosts.four.commonMat;
        case 5:
            return ascensionCosts.five.commonMat;
        case 6:
            return ascensionCosts.six.commonMat;
    }
}

function getAscenionMoraAmount(level: number) {
    switch(level) {
        case 1:
            return ascensionCosts.one.mora;
        case 2:
            return ascensionCosts.two.mora;
        case 3:
            return ascensionCosts.three.mora;
        case 4:
            return ascensionCosts.four.mora;
        case 5:
            return ascensionCosts.five.mora;
        case 6:
            return ascensionCosts.six.mora;
    }
}

function getHerosWitAmount(level: number) {
    switch(level) {
        case 1:
            return ascensionCosts.one.heroswit;
        case 2:
            return ascensionCosts.two.heroswit;
        case 3:
            return ascensionCosts.three.heroswit;
        case 4:
            return ascensionCosts.four.heroswit;
        case 5:
            return ascensionCosts.five.heroswit;
        case 6:
            return ascensionCosts.six.heroeswit;
    }
}
function getTalentMat(talentMaterial: any, talentLevel: number) {
    switch(talentMaterial) {
        case "Resistance":
            if (talentLevel === 2) {
                return "Teachings_of_Resistance"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Guide_to_Resistance"
            }

            else {
                return "Philosophies_of_Resistance"
            }
        case "Freedom":
            if (talentLevel === 2) {
                return "Teachings_of_Freedom"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Guide_to_Freedom"
            }

            else {
                return "Philosophies_of_Freedom"
            }
        case "Ballad":
            if (talentLevel === 2) {
                return "Teachings_of_Ballad"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Guide_to_Ballad"
            }

            else {
                return "Philosophies_of_Ballad"
            }
        case "Prosperity":
            if (talentLevel === 2) {
                return "Teachings_of_Prosperity"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Guide_to_Prosperity"
            }

            else {
                return "Philosophies_of_Prosperity"
            }
        case "Diligence":
            if (talentLevel === 2) {
                return "Teachings_of_Diligence"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Guide_to_Diligence"
            }

            else {
                return "Philosophies_of_Diligence"
            }
        case "Gold":
            if (talentLevel === 2) {
                return "Teachings_of_Gold"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Guide_to_Gold"
            }

            else {
                return "Philosophies_of_Gold"
            }
    }

}

function getTalentMatAmount(talentLevel: number) {
    switch(talentLevel) {
        case 2:
            return talentCosts.two.talentMaterial;
        case 3:
            return talentCosts.three.talentMaterial;
        case 4:
            return talentCosts.four.talentMaterial;
        case 5:
            return talentCosts.five.talentMaterial;
        case 6:
            return talentCosts.six.talentMaterial;
        case 7:
            return talentCosts.seven.talentMaterial;
        case 8:
            return talentCosts.eight.talentMaterial;
        case 9:
            return talentCosts.nine.talentMaterial;
        case 10:
            return talentCosts.ten.talentMaterial;
    }
}

function getTalentCommonMat(commonMaterial: any, talentLevel: number) {
    switch(commonMaterial) {
        case "Slime_Condensate":        
            if (talentLevel === 2) {
                return "Slime_Condensate"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Slime_Secretions"
            }
            else {
                return "Slime_Concentrate"
            }
        case "Damaged_Mask":
            if (talentLevel === 2) {
                return "Damaged_Mask"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Stained_Mask"
            }
            else {
                return "Ominous_Mask"
            }
        case "Firm_Arrowhead":
            if (talentLevel === 2) {
                return "Firm_Arrowhead"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Sharp_Arrowhead"
            }
            else {
                return "Weathered_Arrowhead"
            }
        case "Divining_Scroll":
            if (talentLevel === 2) {
                return "Divining_Scroll"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Sealed_Scroll"
            }
            else {
                return "Forbidden_Curse_Scroll"
            }
        case "Treasure_Hoarder_Insignia":
            if (talentLevel === 2) {
                return "Treasure_Hoarder_Insignia"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Silver_Raven_Insignia"
            }
            else {
                return "Golden_Raven_Insignia"
            }
        case "Recruit's_Insignia":
            if (talentLevel === 2) {
                return "Recruit's_Insignia"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Sergeant's_Insignia"
            }
            else {
                return "Lieutenant's_Insignia"
            }
        case "Whopperflower_Nectar":
            if (talentLevel === 2) {
                return "Whopperflower_Nectar"
            }
            else if (talentLevel === 3 || talentLevel === 4 || talentLevel === 5 || talentLevel === 6) {
                return "Shimmering_Nectar"
            }
            else {
                return "Energy_Nectar"
            }
    }
}

function getTalentCommonMatAmount(talentLevel: number) {
    switch(talentLevel) {
        case 2:
            return talentCosts.two.commonMat;
        case 3:
            return talentCosts.three.commonMat;
        case 4:
            return talentCosts.four.commonMat;
        case 5:
            return talentCosts.five.commonMat;
        case 6:
            return talentCosts.six.commonMat;
        case 7:
            return talentCosts.seven.commonMat;
        case 8:
            return talentCosts.eight.commonMat;
        case 9:
            return talentCosts.nine.commonMat;
        case 10:
            return talentCosts.ten.commonMat;
    }
}

function getTalentBossMatAmount(talentLevel: number) {
    switch(talentLevel) {
        case 7:
            return talentCosts.seven.bossMat
        case 8:
            return talentCosts.eight.bossMat
        case 9:
            return talentCosts.nine.bossMat
        case 10:
            return talentCosts.ten.bossMat
        default:
            return 0
    }
}

function getTalentMoraAmount(talentLevel: number) {
    switch(talentLevel) {
        case 2:
            return talentCosts.two.mora;
        case 3:
            return talentCosts.three.mora;
        case 4:
            return talentCosts.four.mora;
        case 5:
            return talentCosts.five.mora;
        case 6:
            return talentCosts.six.mora;
        case 7:
            return talentCosts.seven.mora;
        case 8:
            return talentCosts.eight.mora;
        case 9:
            return talentCosts.nine.mora;
        case 10:
            return talentCosts.ten.mora;
    }
}

function addMaterial(mat: any, materials: any) {
    //console.log(mat.quantity)
    let duplicateMaterial = materials.find((material: { name: any; }) => material.name === mat.name)
    if (duplicateMaterial) {
        duplicateMaterial.quantity += mat.quantity
    } else {
        materials.push(mat)
    }
}

function addTalentMaterial(character: any, ascensionDetails: any, ability: string, materials: any) {
    switch(ability) {
        case "abilityOne":
            for (let talentLevel = ascensionDetails.abilityOneCurrent; talentLevel <= ascensionDetails.abilityOneDesired; talentLevel++) {
                let abilityMat = {name: "", quantity: 0, image: ""};
                abilityMat.name = getTalentMat(character.talentMats.talentMat, talentLevel)!;
                abilityMat.quantity = getTalentMatAmount(talentLevel)!;
                addMaterial(abilityMat, materials);
            }
            return
        case "abilityTwo":
            for (let talentLevel = ascensionDetails.abilityTwoCurrent; talentLevel <= ascensionDetails.abilityTwoDesired; talentLevel++) {
                let abilityMat = {name: "", quantity: 0, image: ""};
                abilityMat.name = getTalentMat(character.talentMats.talentMat, talentLevel)!;
                abilityMat.quantity = getTalentMatAmount(talentLevel)!;
                addMaterial(abilityMat, materials);
            }
            return
        case "abilityThree":
            for (let talentLevel = ascensionDetails.abilityThreeCurrent; talentLevel <= ascensionDetails.abilityThreeDesired; talentLevel++) {
                let abilityMat = {name: "", quantity: 0, image: ""};
                abilityMat.name = getTalentMat(character.talentMats.talentMat, talentLevel)!;
                abilityMat.quantity = getTalentMatAmount(talentLevel)!;
                addMaterial(abilityMat, materials);
            }
            return
    }
}

function addTalentCommonMaterial(character: any, ascensionDetails: any, ability: string, materials: any) {
    switch(ability) {
        case "abilityOne":
            for (let talentLevel = ascensionDetails.abilityOneCurrent; talentLevel <= ascensionDetails.abilityOneDesired; talentLevel++) {
                let commonMat = {name: "", quantity: 0, image: ""};
                commonMat.name = getTalentCommonMat(character.ascensionMats.commonMat, talentLevel)!;
                commonMat.quantity = getTalentCommonMatAmount(talentLevel)!;
                addMaterial(commonMat, materials);
            }
            return
        case "abilityTwo":
            for (let talentLevel = ascensionDetails.abilityTwoCurrent; talentLevel <= ascensionDetails.abilityTwoDesired; talentLevel++) {
                let commonMat = {name: "", quantity: 0, image: ""};
                commonMat.name = getTalentCommonMat(character.ascensionMats.commonMat, talentLevel)!;
                commonMat.quantity = getTalentCommonMatAmount(talentLevel)!;
                addMaterial(commonMat, materials);
            }
            return
        case "abilityThree":
            for (let talentLevel = ascensionDetails.abilityThreeCurrent; talentLevel <= ascensionDetails.abilityThreeDesired; talentLevel++) {
                let commonMat = {name: "", quantity: 0, image: ""};
                commonMat.name = getTalentCommonMat(character.ascensionMats.commonMat, talentLevel)!;
                commonMat.quantity = getTalentCommonMatAmount(talentLevel)!;
                addMaterial(commonMat, materials);
            }
            return
    }
}

function addTalentBossMaterial(character: any, ascensionDetails: any, ability: string, materials: any) {
    switch(ability) {
        case "abilityOne":
            for (let talentLevel = ascensionDetails.abilityOneCurrent; talentLevel <= ascensionDetails.abilityOneDesired; talentLevel++) {
                if (talentLevel >= 7) {
                    let bossMat = {name: "", quantity: 0, image: ""};
                    bossMat.name = character.talentMats.bossMat;
                    bossMat.quantity = getTalentBossMatAmount(talentLevel);
                    addMaterial(bossMat, materials);
                }
            } 
            return
        case "abilityTwo":
            for (let talentLevel = ascensionDetails.abilityTwoCurrent; talentLevel <= ascensionDetails.abilityTwoDesired; talentLevel++) {
                if (talentLevel >= 7) {
                    let bossMat = {name: "", quantity: 0, image: ""};
                    bossMat.name = character.talentMats.bossMat;
                    bossMat.quantity = getTalentBossMatAmount(talentLevel);
                    addMaterial(bossMat, materials);
                }
            } 
            return
        case "abilityThree":
            for (let talentLevel = ascensionDetails.abilityThreeCurrent; talentLevel <= ascensionDetails.abilityThreeDesired; talentLevel++) {
                if (talentLevel >= 7) {
                    let bossMat = {name: "", quantity: 0, image: ""};
                    bossMat.name = character.talentMats.bossMat;
                    bossMat.quantity = getTalentBossMatAmount(talentLevel);
                    addMaterial(bossMat, materials);
                }
            } 
            return
    }
}

function addTalentMoraMaterial(character: any, ascensionDetails: any, ability: string, materials: any) {
    switch(ability) {
        case "abilityOne":
            for (let talentLevel = ascensionDetails.abilityOneCurrent; talentLevel <= ascensionDetails.abilityOneDesired; talentLevel++) {
                let mora = {name: "", quantity: 0, image: ""};
                mora.name = "Mora";
                mora.quantity = getTalentMoraAmount(talentLevel)!;
                //console.log("addTalentMoraMaterial mora.quantity:", mora.quantity);
                addMaterial(mora, materials);
            }
            return
        case "abilityTwo":
            for (let talentLevel = ascensionDetails.abilityTwoCurrent; talentLevel <= ascensionDetails.abilityTwoDesired; talentLevel++) {
                let mora = {name: "", quantity: 0, image: ""};
                mora.name = "Mora";
                mora.quantity = getTalentMoraAmount(talentLevel)!;
                addMaterial(mora, materials);
            }
            return
        case "abilityThree":
            for (let talentLevel = ascensionDetails.abilityThreeCurrent; talentLevel <= ascensionDetails.abilityThreeDesired; talentLevel++) {
                let mora = {name: "", quantity: 0, image: ""};
                mora.name = "Mora";
                mora.quantity = getTalentMoraAmount(talentLevel)!;
                addMaterial(mora, materials);
            }
            return
    }
}

function addTalentCrownMaterial(character: any, ascensionDetails: any, ability: string, materials: any) {
    switch(ability) {
        case "abilityOne":
            let talentLevel = ascensionDetails.abilityOneDesired;
                if (talentLevel === 10) {
                    let abilityMat = {name: "", quantity: 0, image: ""};
                    abilityMat.name = "Crown_of_Insight"
                    abilityMat.quantity = 1
                    addMaterial(abilityMat, materials);
                }
            return
        case "abilityTwo":
            let talentLevel2 = ascensionDetails.abilityTwoDesired;
                if (talentLevel2 === 10) {

                    let abilityMat = {name: "", quantity: 0, image: ""};
                    abilityMat.name = "Crown_of_Insight"
                    abilityMat.quantity = 1
                    addMaterial(abilityMat, materials);
                }
            return
        case "abilityThree":
            let talentLevel3 = ascensionDetails.abilityThreeDesired;
                if (talentLevel3 === 10) {

                    let abilityMat = {name: "", quantity: 0, image: ""};
                    abilityMat.name = "Crown_of_Insight"
                    abilityMat.quantity = 1
                    addMaterial(abilityMat, materials);
                }
            }
            return
    }

// const c = {
//     ascensionMats: {matOne: 'Vajrada_Amethyst', matTwo: 'Lightning_Prism', specialty: 'Wolfhook', commonMat: 'Damaged_Mask'},
//     talentMats: {bossMat: "Dvalin's_Claw", talentMat: "Resistance"}
// }
// const a = {
//     currentLevel: 1,
//     desiredLevel: 2,
//     abilityOneCurrent: 2,
//     abilityOneDesired:  8,
//     abilityTwoCurrent: 2,
//     abilityTwoDesired: 8,
//     abilityThreeCurrent: 2,
//     abilityThreeDesired: 8,
// }

function setTalentMaterials(character: any, ascensionDetails: any, materials: any) {
    if (ascensionDetails.abilityOneCurrent === ascensionDetails.abilityOneDesired) {
        // do nothing
        console.log("setTalentMaterials is doing nothing, abilityOne")
    } else {
        ascensionDetails.abilityOneCurrent += 1;
        addTalentMaterial(character, ascensionDetails, "abilityOne", materials);
        addTalentCommonMaterial(character, ascensionDetails, "abilityOne", materials);
        addTalentBossMaterial(character, ascensionDetails, "abilityOne", materials);
        addTalentMoraMaterial(character, ascensionDetails, "abilityOne", materials);
        addTalentCrownMaterial(character, ascensionDetails, "abilityOne", materials);
    }

    if (ascensionDetails.abilityTwoCurrent === ascensionDetails.abilityTwoDesired) {
        // do nothing
        console.log("setTalentMaterials is doing nothing, abilityTwo")
    } else {
        ascensionDetails.abilityTwoCurrent += 1;
        addTalentMaterial(character, ascensionDetails, "abilityTwo", materials);
        addTalentCommonMaterial(character, ascensionDetails, "abilityTwo", materials);
        addTalentBossMaterial(character, ascensionDetails, "abilityTwo", materials);
        addTalentMoraMaterial(character, ascensionDetails, "abilityTwo", materials);
        addTalentCrownMaterial(character, ascensionDetails, "abilityTwo", materials);
    }

    if (ascensionDetails.abilityThreeCurrent === ascensionDetails.abilityThreeDesired) {
        // do nothing
        console.log("setTalentMaterials is doing nothing, abilityThree")
    } else {
        ascensionDetails.abilityThreeCurrent += 1;
        addTalentMaterial(character, ascensionDetails, "abilityThree", materials);
        addTalentCommonMaterial(character, ascensionDetails, "abilityThree", materials);
        addTalentBossMaterial(character, ascensionDetails, "abilityThree", materials);
        addTalentMoraMaterial(character, ascensionDetails, "abilityThree", materials);
        addTalentCrownMaterial(character, ascensionDetails, "abilityThree", materials);
    }
}

export default function SetMaterials(character: any, ascensionDetails: any) {
    //console.log("SetMaterials character:", character);
    console.log("SetMaterials() AscensionDetails:", ascensionDetails);
    let materials: any[] = [];

    for (let level = ascensionDetails.currentLevel +1; level <= ascensionDetails.desiredLevel; level++) {
        let matOne = {name: "", quantity: 0, image: ""};
        matOne.name = getMatOne(character.ascensionMats.matOne, level)!;
        matOne.quantity = getMatOneAmount(level)!;
        // matOne.image = getImage()
        addMaterial(matOne, materials);

        let matTwo = {name: "", quantity: 0, image: ""};
        matTwo.name = character.ascensionMats.matTwo;
        matTwo.quantity = getMatTwoAmount(level)!;
        // matTwo.image = getImage()
        if (level === 1) {
            // do nothing
        } else {
            addMaterial(matTwo, materials);
        }

        let specialty = {name: "", quantity: 0, image: ""};
        specialty.name = character.ascensionMats.specialty;
        specialty.quantity = getSpecialtyAmount(level)!;
        // specialty.image = getImage()
        addMaterial(specialty, materials);

        let commonMat = {name: "", quantity: 0, image: ""};
        commonMat.name = getCommonMat(character.ascensionMats.commonMat, level)!;
        commonMat.quantity = getCommonMatAmount(level)!;
        // commonMat.image = getImage()
        addMaterial(commonMat, materials);

        let mora = {name: "", quantity: 0, image: ""};
        mora.name = "Mora";
        mora.quantity = getAscenionMoraAmount(level)!;
        // mora.image = getImage()
        addMaterial(mora, materials);

        let heroswit = {name: "", quantity: 0, image: ""}
        heroswit.name="Hero's_Wit";
        heroswit.quantity = getHerosWitAmount(level)!;
        addMaterial(heroswit, materials);
    }

    setTalentMaterials(character, ascensionDetails, materials);
    console.log("SetMaterials() Return Materials:", materials);

    return materials;

}

// SetMaterials(c, a)
