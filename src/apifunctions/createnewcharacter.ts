import { createCharacter as createCharacterMutation } from '../graphql/mutations';
import { API } from 'aws-amplify';

export default async function createNewCharacter(character: any, setCharacter: any, characterTemplate: any) {
    console.log("createNewCharacter() called")

    const c = { ...character};
    c.name = 'Eula'
    c.type = 'Cryo'
    c.typeImage = 'Cryo.png'
    c.weapon = 'Claymore'
    c.stars = 'Four'
    c.description = "The Spindrift Knight, a scion of the old aristocracy, and the Captain ofo the Knights of Favonius Reconnaissance Company. The Reason foor which a descendant of the ancient nobles might join the Knights remains a great mystery in Mondstadt to this very day."
    c.image = 'Eula.png'

    c.abilityOne.name = 'Favonius Bladework - Edel'
    c.abilityOne.description = 'Normal Attack'
    c.abilityOne.image = 'Favonius_Bladework_Edel.png'

    c.abilityTwo.name = "Icetide_Vortex"
    c.abilityTwo.description = "Slashes swiftly, dealing Cryo DMG."
    c.abilityTwo.image = "Icetide_Vortex.png"

    c.abilityThree.name = "Glacial Illumination"
    c.abilityThree.description = "Eula deals Cryo DMG to nearby opponents and creates a Lightfall Sword that follows her around for up to 7s."	
    c.abilityThree.image = "Glacial_Illumination.png"

    c.ascensionMats.matOne = 'Shivada_Jade'
    c.ascensionMats.matTwo = 'Hoarfrost_Core'
    c.ascensionMats.specialty = 'Dandelion_Seed'
    c.ascensionMats.commonMat = "Damaged_Mask"
    c.talentMats.talentMat = 'Resistance'
    c.talentMats.bossMat = "Shadow_of_the_Warrior"
    setCharacter(c);

    if (!character.name || !character.description) {
        console.log("createNewCharacter() character.name || character.description issue")
        return; 
    }

    await API.graphql({ query: createCharacterMutation, variables: { input: character } });
    console.log("createNewCharacter() complete ");

    // reset character
    setCharacter(characterTemplate);
}