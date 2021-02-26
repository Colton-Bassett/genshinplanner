import { createCharacter as createCharacterMutation } from '../graphql/mutations';
import { API } from 'aws-amplify';

export default async function createNewCharacter(character: any, setCharacter: any, characterTemplate: any) {
    console.log("createNewCharacter() called")

    const c = { ...character};
    c.name = 'Hu Tao'
    c.type = 'Pyro'
    c.typeImage = 'Pyro.png'
    c.weapon = 'Polearm'
    c.stars = 'Five'
    c.description = 'The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.'
    c.image = 'Hu_Tao.png'

    c.abilityOne.name = 'Secret Spear of Wangsheng'
    c.abilityOne.description = 'Normal Attack'
    c.abilityOne.image = 'Secret_Spear_of_Wangsheng.png'

    c.abilityTwo.name = "Guide to Afterlife"
    c.abilityTwo.description = "Only an unwavering flame can cleanse the impurities of this world."
    c.abilityTwo.image = "Guide_to_Afterlife.png"

    c.abilityThree.name = "Spirit Soother"
    c.abilityThree.description = "Commands a blazing spirit to attack, dealing Pyro DMG in a large AoE."	
    c.abilityThree.image = "Spirit_Soother.png"

    c.ascensionMats.matOne = 'Agnidus_Agate'
    c.ascensionMats.matTwo = 'Juvenile_Jade'
    c.ascensionMats.specialty = 'Silk_Flower'
    c.ascensionMats.commonMat = "Whopperflower_Nectar"
    c.talentMats.talentMat = 'Diligence'
    c.talentMats.bossMat = "Shard_of_a_Foul_Legacy"
    setCharacter(c);

    if (!character.name || !character.description) {
        console.log("createNewCharacter() character.name || character.description issue ")
        return; 
    }

    await API.graphql({ query: createCharacterMutation, variables: { input: character } });
    console.log("createNewCharacter() complete ");

    // reset character
    setCharacter(characterTemplate);
}