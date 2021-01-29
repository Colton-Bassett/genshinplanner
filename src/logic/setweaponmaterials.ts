const fourStarCost = {
    one : { matOne: 3, matTwo: 3, commonMat: 2, levelMora: 9000, ascensionMora: 5000, mysticEnhancementOre: 9 },
    two : { matOne: 3, matTwo: 12, commonMat: 8, levelMora: 42000, ascensionMora: 15000, mysticEnhancementOre: 42},
    three : { matOne: 6, matTwo: 6, commonMat: 6, levelMora: 42000, ascensionMora: 20000, mysticEnhancementOre: 42 },
    four : { matOne: 3, matTwo: 12, commonMat: 9, levelMora: 62000, ascensionMora: 30000, mysticEnhancementOre: 62 },
    five : { matOne: 6, matTwo: 9, commonMat: 6, levelMora: 87000, ascensionMora: 35000, mysticEnhancementOre: 87 },
    six : { matOne: 4, matTwo: 18, commonMat: 12, levelMora: 117000, ascensionMora: 45000, mysticEnhancementOre: 117 },
}

const fiveStarCost = {
    one : { matOne: 5, matTwo: 5, commonMat: 3, levelMora: 13000, ascensionMora: 10000, mysticEnhancementOre: 13 },
    two : { matOne: 5, matTwo: 18, commonMat: 12, levelMora: 63000, ascensionMora: 20000, mysticEnhancementOre: 63 },
    three : { matOne: 9, matTwo: 9, commonMat: 9, levelMora: 63000, ascensionMora: 30000, mysticEnhancementOre: 63 },
    four : { matOne: 5, matTwo: 18, commonMat: 14, levelMora: 93000, ascensionMora: 45000, mysticEnhancementOre: 93 },
    five : { matOne: 9, matTwo: 14, commonMat: 9, levelMora: 130000, ascensionMora: 55000, mysticEnhancementOre: 130 },
    six : { matOne: 6, matTwo: 27, commonMat: 18, levelMora: 176000, ascensionMora: 65000, mysticEnhancementOre: 176 },
}
// 4 STAR
// Ascension         : Level  : Level Mora  : Ascension Mora : Mystic Enhancement Ore
// 1                 : 20     : 9,000       : 5,000           : 9
// 2                 : 40     : 42,000      : 15,000          : 42
// 3                 : 50     : 42,000      : 20,000          : 42
// 4                 : 60     : 62,000      : 30,000          : 62
// 5                 : 70     : 87,000      : 35,000          : 87
// 6                 : 80     : 117,000     : 45,000          : 117
// -                 : 90     : 248,000     : 0              : 248

// 5 STAR
// Ascension         : Level  : Level Mora  : Ascension Mora : Mystic Enhancement Ore
// 1                 : 20     : 13,000      : 10,000         : 13
// 2                 : 40     : 63,000      : 20,000         : 63
// 3                 : 50     : 63,000      : 30,000         : 63
// 4                 : 60     : 93,000      : 45,000         : 93
// 5                 : 70     : 130,000     : 55,000         : 130
// 6                 : 80     : 176,000     : 65,000         : 176
// -                 : 90     : 372,000     : 0              : 372

// weaponMat | matOne - Wolf's Tooth, Lead Elixir, Sands from Guyun, Dandelion Gladiator, Aerosiderite, Decarabian's Tower, 
// eliteMat | matTwo - Heavy Horn, Ley Line Branch, Bone Shard, Mist Grass Pollen, Hunter's Sacrificial Knife, Chaos Device,
// commonMat | commonMat - Slime Condensate, Damaged Mask, Firm Arrowhead, Divining Scroll, Treasure Hoarder Insignia, Recruit's Insignia, Whopperflower Nectar

function getMatOne(matOne: any, level: number) {
    switch(matOne) {
        case "Tile_of_Decarabian's_Tower":        
            if (level === 1) {
                return "Tile_of_Decarabian's_Tower"
            }
            else if (level === 2 || level === 3 ) {
                return "Debris_of_Decarabian's_City"
            }
            else if (level === 4 || level === 5 ) {
                return "Fragment_of_Decarabian's_Epic"
            }
            else {
                return "Scattered_Piece_of_Decarabian's_Dream"
            }
        case "Boreal_Wolf's_Milk_Tooth":        
            if (level === 1) {
                return "Boreal_Wolf's_Milk_Tooth"
            }
            else if (level === 2 || level === 3 ) {
                return "Boreal_Wolf's_Cracked_Tooth"
            }
            else if (level === 4 || level === 5 ) {
                return "Boreal_Wolf's_Broken_Fang"
            }
            else {
                return "Boreal_Wolf's_Nostalgia"
            }
        case "Fetters_of_the_Dandelion_Gladiator":        
            if (level === 1) {
                return "Fetters_of_the_Dandelion_Gladiator"
            }
            else if (level === 2 || level === 3 ) {
                return "Chains_of_the_Dandelion_Gladiator"
            }
            else if (level === 4 || level === 5 ) {
                return "Shackles_of_the_Dandelion_Gladiator"
            }
            else {
                return "Dream_of_the_Dandelion_Gladiator"
            }
        case "Luminous_Sands_from_Guyun":        
            if (level === 1) {
                return "Luminous_Sands_from_Guyun"
            }
            else if (level === 2 || level === 3 ) {
                return "Lustrous_Stone_from_Guyun"
            }
            else if (level === 4 || level === 5 ) {
                return "Relic_from_Guyun"
            }
            else {
                return "Divine_Body_from_Guyun"
            }
        case "Mist_Veiled_Lead_Elixir":        
            if (level === 1) {
                return "Mist_Veiled_Lead_Elixir"
            }
            else if (level === 2 || level === 3 ) {
                return "Mist_Veiled_Mercury_Elixir"
            }
            else if (level === 4 || level === 5 ) {
                return "Mist_Veiled_Gold_Elixir"
            }
            else {
                return "Mist_Veiled_Primo_Elixir"
            }
        case "Grain_of_Aerosiderite":        
            if (level === 1) {
                return "Grain_of_Aerosiderite"
            }
            else if (level === 2 || level === 3 ) {
                return "Piece_of_Aerosiderite"
            }
            else if (level === 4 || level === 5 ) {
                return "Bit_of_Aerosiderite"
            }
            else {
                return "Chunk_of_Aerosiderite"
            }
    }
}

function getMatOneAmount(level: number, stars: string) {
    if (stars === "Four") {
        switch(level) {
            case 1:
                return fourStarCost.one.matOne;
            case 2:
                return fourStarCost.two.matOne;
            case 3:
                return fourStarCost.three.matOne;
            case 4:
                return fourStarCost.four.matOne;
            case 5:
                return fourStarCost.five.matOne;
            case 6:
                return fourStarCost.six.matOne;
        }
    } else {
        // stars === 5
        switch(level) {
            case 1:
                return fiveStarCost.one.matOne;
            case 2:
                return fiveStarCost.two.matOne;
            case 3:
                return fiveStarCost.three.matOne;
            case 4:
                return fiveStarCost.four.matOne;
            case 5:
                return fiveStarCost.five.matOne;
            case 6:
                return fiveStarCost.six.matOne;
        }
    }
}

function getMatTwo(matTwo: any, level: number) {
    switch(matTwo) {
        case "Heavy_Horn":        
            if (level === 1 || level === 2) {
                return "Heavy_Horn"
            }
            else if (level === 3 || level === 4 ) {
                return "Black_Bronze_Horn"
            }
            else {
                return "Black_Crystal_Horn"
            }
        case "Dead_Ley_Line_Branch":        
            if (level === 1 || level === 2) {
                return "Dead_Ley_Line_Branch"
            }
            else if (level === 3 || level === 4 ) {
                return "Dead_Ley_Line_Leaves"
            }
            else {
                return "Ley_Line_Sprouts"
            }
        case "Fragile_Bone_Shard":        
            if (level === 1 || level === 2) {
                return "Fragile_Bone_Shard"
            }
            else if (level === 3 || level === 4 ) {
                return "Sturdy_Bone_Shard"
            }
            else {
                return "Fossilized_Bone_Shard"
            }
        case "Mist_Grass_Pollen":        
            if (level === 1 || level === 2) {
                return "Mist_Grass_Pollen"
            }
            else if (level === 3 || level === 4 ) {
                return "Mist_Grass"
            }
            else {
                return "Mist_Grass_Wick"
            }
        case "Hunter's_Sacrificial_Knife":        
            if (level === 1 || level === 2) {
                return "Hunter's_Sacrificial_Knife"
            }
            else if (level === 3 || level === 4 ) {
                return "Agent's_Sacrificial_Knife"
            }
            else {
                return "Inspector's_Sacrificial_Knife"
            }
        case "Chaos_Device":        
            if (level === 1 || level === 2) {
                return "Chaos_Device"
            }
            else if (level === 3 || level === 4 ) {
                return "Chaos_Circuit"
            }
            else {
                return "Chaos_Core"
            }
    }  
}

function getMatTwoAmount(level: number, stars: string) {
    if (stars === "Four") {
        switch(level) {
            case 1:
                return fourStarCost.one.matTwo;
            case 2:
                return fourStarCost.two.matTwo;
            case 3:
                return fourStarCost.three.matTwo;
            case 4:
                return fourStarCost.four.matTwo;
            case 5:
                return fourStarCost.five.matTwo;
            case 6:
                return fourStarCost.six.matTwo;
        }
    } else {
        // stars === 5
        switch(level) {
            case 1:
                return fiveStarCost.one.matTwo;
            case 2:
                return fiveStarCost.two.matTwo;
            case 3:
                return fiveStarCost.three.matTwo;
            case 4:
                return fiveStarCost.four.matTwo;
            case 5:
                return fiveStarCost.five.matTwo;
            case 6:
                return fiveStarCost.six.matTwo;
        }
    }
}

function getCommonMat(commonMaterial: any, level: number) {
    switch(commonMaterial) {
        case "Slime_Condensate":        
            if (level === 1 || level === 2 ) {
                return "Slime_Condensate"
            }
            else if (level === 3 || level === 4 ) {
                return "Slime_Secretions"
            }
            else {
                return "Slime_Concentrate"
            }
        case "Damaged_Mask":
            if (level === 1 || level === 2 ) {
                return "Damaged_Mask"
            }
            else if (level === 3 || level === 4 ) {
                return "Stained_Mask"
            }
            else {
                return "Ominous_Mask"
            }
        case "Firm_Arrowhead":
            if (level === 1 || level === 2 ) {
                return "Firm_Arrowhead"
            }
            else if (level === 3 || level === 4 ) {
                return "Sharp_Arrowhead"
            }
            else {
                return "Weathered_Arrowhead"
            }
        case "Divining_Scroll":
            if (level === 1 || level === 2 ) {
                return "Divining_Scroll"
            }
            else if (level === 3 || level === 4 ) {
                return "Sealed_Scroll"
            }
            else {
                return "Forbidden_Curse_Scroll"
            }
        case "Treasure_Hoarder_Insignia":
            if (level === 1 || level === 2 ) {
                return "Treasure_Hoarder_Insignia"
            }
            else if (level === 3 || level === 4 ) {
                return "Silver_Raven_Insignia"
            }
            else {
                return "Golden_Raven_Insignia"
            }
        case "Recruit's_Insignia":
            if (level === 1 || level === 2 ) {
                return "Recruit's_Insignia"
            }
            else if (level === 3 || level === 4 ) {
                return "Sergeant's_Insignia"
            }
            else {
                return "Lieutenant's_Insignia"
            }
        case "Whopperflower_Nectar":
            if (level === 1 || level === 2 ) {
                return "Whopperflower_Nectar"
            }
            else if (level === 3 || level === 4 ) {
                return "Shimmering_Nectar"
            }
            else {
                return "Energy_Nectar"
            }
    }
}

function getCommonMatAmount(level: number, stars: string) {
    if (stars === "Four") {
        switch(level) {
            case 1:
                return fourStarCost.one.commonMat;
            case 2:
                return fourStarCost.two.commonMat;
            case 3:
                return fourStarCost.three.commonMat;
            case 4:
                return fourStarCost.four.commonMat;
            case 5:
                return fourStarCost.five.commonMat;
            case 6:
                return fourStarCost.six.commonMat;
        }
    } else {
        // stars === 5
        switch(level) {
            case 1:
                return fiveStarCost.one.commonMat;
            case 2:
                return fiveStarCost.two.commonMat;
            case 3:
                return fiveStarCost.three.commonMat;
            case 4:
                return fiveStarCost.four.commonMat;
            case 5:
                return fiveStarCost.five.commonMat;
            case 6:
                return fiveStarCost.six.commonMat;
        }
    }
}

function getLevelMoraAmount(level: number, stars: string) {
    if (stars === "Four") {
        switch(level) {
            case 1:
                return fourStarCost.one.levelMora;
            case 2:
                return fourStarCost.two.levelMora;
            case 3:
                return fourStarCost.three.levelMora;
            case 4:
                return fourStarCost.four.levelMora;
            case 5:
                return fourStarCost.five.levelMora;
            case 6:
                return fourStarCost.six.levelMora;
        }
    } else {
        // stars === 5
        switch(level) {
            case 1:
                return fiveStarCost.one.levelMora;
            case 2:
                return fiveStarCost.two.levelMora;
            case 3:
                return fiveStarCost.three.levelMora;
            case 4:
                return fiveStarCost.four.levelMora;
            case 5:
                return fiveStarCost.five.levelMora;
            case 6:
                return fiveStarCost.six.levelMora;
        }
    }
}

function getAscensionMoraAmount(level: number, stars: string) {
    if (stars === "Four") {
        switch(level) {
            case 1:
                return fourStarCost.one.ascensionMora;
            case 2:
                return fourStarCost.two.ascensionMora;
            case 3:
                return fourStarCost.three.ascensionMora;
            case 4:
                return fourStarCost.four.ascensionMora;
            case 5:
                return fourStarCost.five.ascensionMora;
            case 6:
                return fourStarCost.six.ascensionMora;
        }
    } else {
        // stars === 5
        switch(level) {
            case 1:
                return fiveStarCost.one.ascensionMora;
            case 2:
                return fiveStarCost.two.ascensionMora;
            case 3:
                return fiveStarCost.three.ascensionMora;
            case 4:
                return fiveStarCost.four.ascensionMora;
            case 5:
                return fiveStarCost.five.ascensionMora;
            case 6:
                return fiveStarCost.six.ascensionMora;
        }
    }
}

function getOreAmount(level: number, stars: string) {
    if (stars === "Four") {
        switch(level) {
            case 1:
                return fourStarCost.one.mysticEnhancementOre;
            case 2:
                return fourStarCost.two.mysticEnhancementOre;
            case 3:
                return fourStarCost.three.mysticEnhancementOre;
            case 4:
                return fourStarCost.four.mysticEnhancementOre;
            case 5:
                return fourStarCost.five.mysticEnhancementOre;
            case 6:
                return fourStarCost.six.mysticEnhancementOre;
        }
    } else {
        // stars === 5
        switch(level) {
            case 1:
                return fiveStarCost.one.mysticEnhancementOre;
            case 2:
                return fiveStarCost.two.mysticEnhancementOre;
            case 3:
                return fiveStarCost.three.mysticEnhancementOre;
            case 4:
                return fiveStarCost.four.mysticEnhancementOre;
            case 5:
                return fiveStarCost.five.mysticEnhancementOre;
            case 6:
                return fiveStarCost.six.mysticEnhancementOre;
        }
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

export default function SetWeaponMaterials(weapon: any, ascensionDetails: any) {
    //console.log("SetWeaponMaterials() AscensionDetails:", ascensionDetails);
    //console.log("SetWeaponMaterials() weapon:", weapon)
    //console.log("stars:", ascensionDetails.stars);

    let materials: any[] = [];

    for (let level = ascensionDetails.currentLevel +1; level <= ascensionDetails.desiredLevel; level++) {
        let matOne = {name: "", quantity: 0, image: ""};
        matOne.name = getMatOne(weapon.ascensionMats.matOne, level)!;
        matOne.quantity = getMatOneAmount(level, ascensionDetails.stars)!;
        // matOne.image = getImage()
        //console.log("matOne", matOne)
        addMaterial(matOne, materials);

        let matTwo = {name: "", quantity: 0, image: ""};
        matTwo.name = getMatTwo(weapon.ascensionMats.matTwo, level)!;
        matTwo.quantity = getMatTwoAmount(level, ascensionDetails.stars)!;
        // matTwo.image = getImage()
        //console.log("matTwo", matTwo)
        addMaterial(matTwo, materials);

        let commonMat = {name: "", quantity: 0, image: ""};
        commonMat.name = getCommonMat(weapon.ascensionMats.commonMat, level)!;
        commonMat.quantity = getCommonMatAmount(level, ascensionDetails.stars)!;
        // commonMat.image = getImage()
        //console.log("commonMat", commonMat)
        addMaterial(commonMat, materials);

        let levelMora = {name: "", quantity: 0, image: ""};
        levelMora.name = "Mora";
        levelMora.quantity = getLevelMoraAmount(level, ascensionDetails.stars)!;
        // mora.image = getImage()
        addMaterial(levelMora, materials);

        let ascensionMora = {name: "", quantity: 0, image: ""};
        ascensionMora.name = "Mora";
        ascensionMora.quantity = getAscensionMoraAmount(level, ascensionDetails.stars)!;
        // mora.image = getImage()
        addMaterial(ascensionMora, materials);

        let ore = {name: "", quantity: 0, image: ""};
        ore.name = "Mystic_Enhancement_Ore";
        ore.quantity = getOreAmount(level, ascensionDetails.stars)!;
        addMaterial(ore, materials);
    }

    console.log("SetWeaponMaterials() Return Materials:", materials);
    return materials;
}