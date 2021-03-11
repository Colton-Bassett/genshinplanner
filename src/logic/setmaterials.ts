import GetDesiredHerosWit from './getDesiredHerosWit'
import GetDesiredLevelMoraCost from './getDesiredLevelMoraCost'
import HandleLevel from './handleLevel'

interface Material {
    name: string,
    type: string,
    quantity: number,
    stars: string,
    position: string,
    description: string,
    image: string,
    sources: { sourceOne: string, sourceTwo: string, sourceThree: string, sourceFour: string, sourceFive: string }
}

const initialMaterial = {
    name: '', 
    type: '', 
    quantity: 0,
    stars: '',
    position: '',
    description: '', 
    image: '', 
    sources: { sourceOne: '', sourceTwo: '', sourceThree: '', sourceFour: '', sourceFive: '' },		
}

const ascensionCosts = {
    one : { matOne: 1, matTwo: 0, specialty: 3, commonMat: 3, mora: 44000, heroswit: 7 },
    two : { matOne: 3, matTwo: 2, specialty: 10, commonMat: 15, mora: 155600, heroswit: 29 },
    three : { matOne: 6, matTwo: 4, specialty: 20, commonMat: 12, mora: 175800, heroswit: 29 },
    four : { matOne: 3, matTwo: 8, specialty: 30, commonMat: 18, mora: 250800, heroswit: 43 },
    five : { matOne: 6, matTwo: 12, specialty: 45, commonMat: 12, mora: 339000, heroswit: 60 },
    six : { matOne: 6, matTwo: 20, specialty: 60, commonMat: 24, mora: 442200, heroeswit: 81 },
}

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

function addMaterial(mat: any, materials: any, allMaterials: any) {
    //console.log(mat.quantity)
    //console.log("allMaterials:", allMaterials);
    // Traveler (Anemo, Geo) has no matTwo
    if (mat.name === "") {
        return;
    } else {
        let duplicateMaterial = materials.find((material: { name: any; }) => material.name === mat.name)
        if (duplicateMaterial) {
            duplicateMaterial.quantity += mat.quantity
        } else {
            const tempName = mat.name.replace(/_/g, ' ');
            let masterMaterial = allMaterials.find((element: { name: any; }) => element.name === tempName)
            mat.description = masterMaterial.description;
            mat.stars = masterMaterial.stars;
            mat.type = masterMaterial.type;
            mat.position = masterMaterial.position;
            mat.sources.sourceOne = masterMaterial.sources.sourceOne;
            mat.sources.sourceTwo = masterMaterial.sources.sourceTwo;
            mat.sources.sourceThree = masterMaterial.sources.sourceThree;
            mat.sources.sourceFour = masterMaterial.sources.sourceFour;
            mat.sources.sourceFive = masterMaterial.sources.sourceFive;
            materials.push(mat)
        }
    }
}

function addTalentMaterial(character: any, ascensionPlan: any, ability: string, materials: any, allMaterials: any) {
    switch(ability) {
        case "abilityOne":
            for (let talentLevel = ascensionPlan.talentOneStart; talentLevel <= ascensionPlan.talentOneEnd; talentLevel++) {
                let abilityMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                abilityMat.name = getTalentMat(character.talentMats.talentMat, talentLevel)!;
                abilityMat.quantity = getTalentMatAmount(talentLevel)!;
                addMaterial(abilityMat, materials, allMaterials);
            }
            return
        case "abilityTwo":
            for (let talentLevel = ascensionPlan.talentTwoStart; talentLevel <= ascensionPlan.talentTwoEnd; talentLevel++) {
                let abilityMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                abilityMat.name = getTalentMat(character.talentMats.talentMat, talentLevel)!;
                abilityMat.quantity = getTalentMatAmount(talentLevel)!;
                addMaterial(abilityMat, materials, allMaterials);
            }
            return
        case "abilityThree":
            for (let talentLevel = ascensionPlan.talentThreeStart; talentLevel <= ascensionPlan.talentThreeEnd; talentLevel++) {
                let abilityMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                abilityMat.name = getTalentMat(character.talentMats.talentMat, talentLevel)!;
                abilityMat.quantity = getTalentMatAmount(talentLevel)!;
                addMaterial(abilityMat, materials, allMaterials);
            }
            return
    }
}

function addTalentCommonMaterial(character: any, ascensionPlan: any, ability: string, materials: any, allMaterials: any) {
    switch(ability) {
        case "abilityOne":
            for (let talentLevel = ascensionPlan.talentOneStart; talentLevel <= ascensionPlan.talentOneEnd; talentLevel++) {
                let commonMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                commonMat.name = getTalentCommonMat(character.ascensionMats.commonMat, talentLevel)!;
                commonMat.quantity = getTalentCommonMatAmount(talentLevel)!;
                addMaterial(commonMat, materials, allMaterials);
            }
            return
        case "abilityTwo":
            for (let talentLevel = ascensionPlan.talentTwoStart; talentLevel <= ascensionPlan.talentTwoEnd; talentLevel++) {
                let commonMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                commonMat.name = getTalentCommonMat(character.ascensionMats.commonMat, talentLevel)!;
                commonMat.quantity = getTalentCommonMatAmount(talentLevel)!;
                addMaterial(commonMat, materials, allMaterials);
            }
            return
        case "abilityThree":
            for (let talentLevel = ascensionPlan.talentThreeStart; talentLevel <= ascensionPlan.talentThreeEnd; talentLevel++) {
                let commonMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                commonMat.name = getTalentCommonMat(character.ascensionMats.commonMat, talentLevel)!;
                commonMat.quantity = getTalentCommonMatAmount(talentLevel)!;
                addMaterial(commonMat, materials, allMaterials);
            }
            return
    }
}

function addTalentBossMaterial(character: any, ascensionPlan: any, ability: string, materials: any, allMaterials: any) {
    switch(ability) {
        case "abilityOne":
            for (let talentLevel = ascensionPlan.talentOneStart; talentLevel <= ascensionPlan.talentOneEnd; talentLevel++) {
                if (talentLevel >= 7) {
                    let bossMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                    bossMat.name = character.talentMats.bossMat;
                    bossMat.quantity = getTalentBossMatAmount(talentLevel);
                    addMaterial(bossMat, materials, allMaterials);
                }
            } 
            return
        case "abilityTwo":
            for (let talentLevel = ascensionPlan.talentTwoStart; talentLevel <= ascensionPlan.talentTwoEnd; talentLevel++) {
                if (talentLevel >= 7) {
                    let bossMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                    bossMat.name = character.talentMats.bossMat;
                    bossMat.quantity = getTalentBossMatAmount(talentLevel);
                    addMaterial(bossMat, materials, allMaterials);
                }
            } 
            return
        case "abilityThree":
            for (let talentLevel = ascensionPlan.talentThreeStart; talentLevel <= ascensionPlan.talentThreeEnd; talentLevel++) {
                if (talentLevel >= 7) {
                    let bossMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                    bossMat.name = character.talentMats.bossMat;
                    bossMat.quantity = getTalentBossMatAmount(talentLevel);
                    addMaterial(bossMat, materials, allMaterials);
                }
            } 
            return
    }
}

function addTalentMoraMaterial(character: any, ascensionPlan: any, ability: string, materials: any, allMaterials: any) {
    switch(ability) {
        case "abilityOne":
            for (let talentLevel = ascensionPlan.talentOneStart; talentLevel <= ascensionPlan.talentOneEnd; talentLevel++) {
                let mora = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                mora.name = "Mora";
                mora.quantity = getTalentMoraAmount(talentLevel)!;
                //console.log("addTalentMoraMaterial mora.quantity:", mora.quantity);
                addMaterial(mora, materials, allMaterials);
            }
            return
        case "abilityTwo":
            for (let talentLevel = ascensionPlan.talentTwoStart; talentLevel <= ascensionPlan.talentTwoEnd; talentLevel++) {
                let mora = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                mora.name = "Mora";
                mora.quantity = getTalentMoraAmount(talentLevel)!;
                addMaterial(mora, materials, allMaterials);
            }
            return
        case "abilityThree":
            for (let talentLevel = ascensionPlan.talentThreeStart; talentLevel <= ascensionPlan.talentThreeEnd; talentLevel++) {
                let mora = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                mora.name = "Mora";
                mora.quantity = getTalentMoraAmount(talentLevel)!;
                addMaterial(mora, materials, allMaterials);
            }
            return
    }
}

function addTalentCrownMaterial(character: any, ascensionPlan: any, ability: string, materials: any, allMaterials: any) {
    switch(ability) {
        case "abilityOne":
            let talentLevel = ascensionPlan.talentOneEnd;
                if (talentLevel === 10) {
                    let abilityMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                    abilityMat.name = "Crown_of_Insight"
                    abilityMat.quantity = 1
                    addMaterial(abilityMat, materials, allMaterials);
                }
            return
        case "abilityTwo":
            let talentLevel2 = ascensionPlan.talentTwoEnd;
                if (talentLevel2 === 10) {

                    let abilityMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                    abilityMat.name = "Crown_of_Insight"
                    abilityMat.quantity = 1
                    addMaterial(abilityMat, materials, allMaterials);
                }
            return
        case "abilityThree":
            let talentLevel3 = ascensionPlan.talentThreeEnd;
                if (talentLevel3 === 10) {

                    let abilityMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                    abilityMat.name = "Crown_of_Insight"
                    abilityMat.quantity = 1
                    addMaterial(abilityMat, materials, allMaterials);
                }
            }
            return
    }

function addTravelerTalentMaterial(character: any, ascensionPlan: any, ability: string, materials: any, allMaterials: any) {
    switch(ability) {
        case "abilityOne":
            for (let talentLevel = ascensionPlan.talentOneStart; talentLevel <= ascensionPlan.talentOneEnd; talentLevel++) {
                let abilityMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                if ((talentLevel + 1) % 3 === 0) {
                    character.talentMats.talentMat = "Freedom";
                }
                if ((talentLevel + 1) % 3 === 1) {
                    character.talentMats.talentMat = "Resistance";
                }
                if ((talentLevel + 1) % 3 === 2) {
                    character.talentMats.talentMat = "Ballad";
                }
                abilityMat.name = getTalentMat(character.talentMats.talentMat, talentLevel)!;
                abilityMat.quantity = getTalentMatAmount(talentLevel)!;
                addMaterial(abilityMat, materials, allMaterials);
            }
            return
        case "abilityTwo":
            for (let talentLevel = ascensionPlan.talentTwoStart; talentLevel <= ascensionPlan.talentTwoEnd; talentLevel++) {
                let abilityMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                if (character.name === "Traveler (Anemo)") {
                    if ((talentLevel + 1) % 3 === 0) {
                        character.talentMats.talentMat = "Freedom";
                    }
                    if ((talentLevel + 1) % 3 === 1) {
                        character.talentMats.talentMat = "Resistance";
                    }
                    if ((talentLevel + 1) % 3 === 2) {
                        console.log("abilityTwo adding Ballad")
                        character.talentMats.talentMat = "Ballad";
                    }
                } else {
                    if ((talentLevel + 1) % 3 === 0) {
                        character.talentMats.talentMat = "Prosperity";
                    }
                    if ((talentLevel + 1) % 3 === 1) {
                        character.talentMats.talentMat = "Diligence";
                    }
                    if ((talentLevel + 1) % 3 === 2) {
                        character.talentMats.talentMat = "Gold";
                    }
                }
                abilityMat.name = getTalentMat(character.talentMats.talentMat, talentLevel)!;
                abilityMat.quantity = getTalentMatAmount(talentLevel)!;
                addMaterial(abilityMat, materials, allMaterials);
            }
            return
        case "abilityThree":
            for (let talentLevel = ascensionPlan.talentThreeStart; talentLevel <= ascensionPlan.talentThreeEnd; talentLevel++) {
                let abilityMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
                if (character.name === "Traveler (Anemo)") {
                    if ((talentLevel + 1) % 3 === 0) {
                        character.talentMats.talentMat = "Freedom";
                    }
                    if ((talentLevel + 1) % 3 === 1) {
                        character.talentMats.talentMat = "Resistance";
                    }
                    if ((talentLevel + 1) % 3 === 2) {
                        character.talentMats.talentMat = "Ballad";
                    }
                } else {
                    if ((talentLevel + 1) % 3 === 0) {
                        character.talentMats.talentMat = "Prosperity";
                    }
                    if ((talentLevel + 1) % 3 === 1) {
                        character.talentMats.talentMat = "Diligence";
                    }
                    if ((talentLevel + 1) % 3 === 2) {
                        character.talentMats.talentMat = "Gold";
                    }
                }
                abilityMat.name = getTalentMat(character.talentMats.talentMat, talentLevel)!;
                abilityMat.quantity = getTalentMatAmount(talentLevel)!;
                addMaterial(abilityMat, materials, allMaterials);
            }
            return
    }
}

function setTravelerTalentMaterials(character: any, ascensionPlan: any, materials: any, allMaterials: any) {
    if (ascensionPlan.talentOneStart === ascensionPlan.talentOneEnd) {
        // do nothing
        //console.log("setTalentMaterials is doing nothing, abilityOne")
    } else {
        ascensionPlan.talentOneStart += 1;
        character.ascensionMats.commonMat = "Divining_Scroll";
        character.talentMats.bossMat = "Dvalin's_Sigh";
        addTravelerTalentMaterial(character, ascensionPlan, "abilityOne", materials, allMaterials);
        addTalentCommonMaterial(character, ascensionPlan, "abilityOne", materials, allMaterials);
        addTalentBossMaterial(character, ascensionPlan, "abilityOne", materials, allMaterials);
        addTalentMoraMaterial(character, ascensionPlan, "abilityOne", materials, allMaterials);
        addTalentCrownMaterial(character, ascensionPlan, "abilityOne", materials, allMaterials);
    }

    if (ascensionPlan.talentTwoStart === ascensionPlan.talentTwoEnd) {
        // do nothing
        //console.log("setTalentMaterials is doing nothing, abilityTwo")
    } else {
        ascensionPlan.talentTwoStart += 1;
        if (character.name === "Traveler (Anemo)") {
            character.ascensionMats.commonMat = "Divining_Scroll"
        } else {
            character.ascensionMats.commonMat = "Firm_Arrowhead"
            character.talentMats.bossMat = "Tail_of_Boreas"
        }
        addTravelerTalentMaterial(character, ascensionPlan, "abilityTwo", materials, allMaterials);
        addTalentCommonMaterial(character, ascensionPlan, "abilityTwo", materials, allMaterials);
        addTalentBossMaterial(character, ascensionPlan, "abilityTwo", materials, allMaterials);
        addTalentMoraMaterial(character, ascensionPlan, "abilityTwo", materials, allMaterials);
        addTalentCrownMaterial(character, ascensionPlan, "abilityTwo", materials, allMaterials);
    }

    if (ascensionPlan.talentThreeStart === ascensionPlan.talentThreeEnd) {
        // do nothing
        //console.log("setTalentMaterials is doing nothing, abilityThree")
    } else {
        ascensionPlan.talentThreeStart += 1;
        if (character.name === "Traveler (Anemo)") {
            character.ascensionMats.commonMat = "Divining_Scroll"
        } else {
            character.ascensionMats.commonMat = "Firm_Arrowhead"
            character.talentMats.bossMat = "Tail_of_Boreas"
        }
        addTravelerTalentMaterial(character, ascensionPlan, "abilityThree", materials, allMaterials);
        addTalentCommonMaterial(character, ascensionPlan, "abilityThree", materials, allMaterials);
        addTalentBossMaterial(character, ascensionPlan, "abilityThree", materials, allMaterials);
        addTalentMoraMaterial(character, ascensionPlan, "abilityThree", materials, allMaterials);
        addTalentCrownMaterial(character, ascensionPlan, "abilityThree", materials, allMaterials);
    }
    // reset mats
    character.ascensionMats.commonMat = "Damaged_Mask";
    character.talentMats.bossMat = "Dvalin's Sigh";
}

function setTalentMaterials(character: any, ascensionPlan: any, materials: any, allMaterials: any) {
    if (ascensionPlan.talentOneStart === ascensionPlan.talentOneEnd) {
        // do nothing
        //console.log("setTalentMaterials is doing nothing, abilityOne")
    } else {
        ascensionPlan.talentOneStart += 1;
        addTalentMaterial(character, ascensionPlan, "abilityOne", materials, allMaterials);
        addTalentCommonMaterial(character, ascensionPlan, "abilityOne", materials, allMaterials);
        addTalentBossMaterial(character, ascensionPlan, "abilityOne", materials, allMaterials);
        addTalentMoraMaterial(character, ascensionPlan, "abilityOne", materials, allMaterials);
        addTalentCrownMaterial(character, ascensionPlan, "abilityOne", materials, allMaterials);
    }

    if (ascensionPlan.talentTwoStart === ascensionPlan.talentTwoEnd) {
        // do nothing
        //console.log("setTalentMaterials is doing nothing, abilityTwo")
    } else {
        ascensionPlan.talentTwoStart += 1;
        addTalentMaterial(character, ascensionPlan, "abilityTwo", materials, allMaterials);
        addTalentCommonMaterial(character, ascensionPlan, "abilityTwo", materials, allMaterials);
        addTalentBossMaterial(character, ascensionPlan, "abilityTwo", materials, allMaterials);
        addTalentMoraMaterial(character, ascensionPlan, "abilityTwo", materials, allMaterials);
        addTalentCrownMaterial(character, ascensionPlan, "abilityTwo", materials, allMaterials);
    }

    if (ascensionPlan.talentThreeStart === ascensionPlan.talentThreeEnd) {
        // do nothing
        //console.log("setTalentMaterials is doing nothing, abilityThree")
    } else {
        ascensionPlan.talentThreeStart += 1;
        addTalentMaterial(character, ascensionPlan, "abilityThree", materials, allMaterials);
        addTalentCommonMaterial(character, ascensionPlan, "abilityThree", materials, allMaterials);
        addTalentBossMaterial(character, ascensionPlan, "abilityThree", materials, allMaterials);
        addTalentMoraMaterial(character, ascensionPlan, "abilityThree", materials, allMaterials);
        addTalentCrownMaterial(character, ascensionPlan, "abilityThree", materials, allMaterials);
    }
}

export default function SetMaterials(character: any, ascensionPlan: any, allMaterials: any) {
    //console.log("SetMaterials character:", character);
    //console.log("SetMaterials() AscensionPlan:", ascensionPlan);

    let currentLevel = HandleLevel(ascensionPlan.startAscension, ascensionPlan.currentMax) || 0;
    let desiredLevel = HandleLevel(ascensionPlan.endAscension, ascensionPlan.desiredMax) || 0;

    let materials: any[] = [];

    // checking if startLevel === desiredLevel (no hero's wits or mora should be calculated)
    if (currentLevel !== desiredLevel) {
        let mora = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
        mora.name = "Mora";
        mora.quantity = GetDesiredLevelMoraCost(currentLevel, ascensionPlan.startAscension, desiredLevel, ascensionPlan.endAscension);
        addMaterial(mora, materials, allMaterials);
    
        let heroswit = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
        heroswit.name="Hero's_Wit";
        heroswit.quantity = GetDesiredHerosWit(currentLevel, ascensionPlan.startAscension, desiredLevel, ascensionPlan.endAscension);
        addMaterial(heroswit, materials, allMaterials)
        
    }

    for (let level = ascensionPlan.startAscension +1; level <= ascensionPlan.endAscension; level++) {
        let matOne = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
        matOne.name = getMatOne(character.ascensionMats.matOne, level)!;
        matOne.quantity = getMatOneAmount(level)!;
        // matOne.image = getImage()
        addMaterial(matOne, materials, allMaterials);

        let matTwo = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
        matTwo.name = character.ascensionMats.matTwo;
        matTwo.quantity = getMatTwoAmount(level)!;
        // matTwo.image = getImage()
        if (level === 1) {
            // do nothing
        } else {
            addMaterial(matTwo, materials, allMaterials);
        }

        let specialty = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
        specialty.name = character.ascensionMats.specialty;
        specialty.quantity = getSpecialtyAmount(level)!;
        // specialty.image = getImage()
        addMaterial(specialty, materials, allMaterials);

        let commonMat = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
        commonMat.name = getCommonMat(character.ascensionMats.commonMat, level)!;
        commonMat.quantity = getCommonMatAmount(level)!;
        // commonMat.image = getImage()
        addMaterial(commonMat, materials, allMaterials);

        // let heroswit = {name: "", type: "", stars: "", quantity: 0, image: "", description: "", position: "", sources: {sourceOne: "", sourceTwo: "", sourceThree: "", sourceFour: "", sourceFive: ""}};
        // heroswit.name="Hero's_Wit";
        // heroswit.quantity = getHerosWitAmount(level)!;
        // addMaterial(heroswit, materials, allMaterials);
    }

    // checking for Traveler (Anemo, Geo)
    if (character.name === "Traveler (Anemo)" || character.name === "Traveler (Geo)") {
        setTravelerTalentMaterials(character, ascensionPlan, materials, allMaterials);
    } else {
        setTalentMaterials(character, ascensionPlan, materials, allMaterials);
    }

    //console.log("SetMaterials() Return Materials:", materials);

    // sorting by position
    materials?.sort((a, b) => parseFloat(a.position) - parseFloat(b.position));
    return materials;

}


