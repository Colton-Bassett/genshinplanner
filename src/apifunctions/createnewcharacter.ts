import { createCharacter as createCharacterMutation } from '../graphql/mutations';
import { API } from 'aws-amplify';

export default async function createNewCharacter(character: any, setCharacter: any, characterTemplate: any) {
    console.log("createNewCharacter() called")

    const c = { ...character};
    c.name = 'Xiao'
    c.type = 'Anemo'
    c.typeImage = 'Anemo.png'
    c.weapon = 'Polearm'
    c.stars = 'Five'
    c.description = 'A yaksha adeptus that defends Liyue. Also heralded as the "Conqueror of Demons" or "Vigilant Yaksha."'
    c.image = 'Xiao.png'

    c.abilityOne.name = 'Whirlwind Thrust'
    c.abilityOne.description = 'Normal Attack'
    c.abilityOne.image = 'Whirlwind_Thrust.png'

    c.abilityTwo.name = "Lemniscatic Wind Cycling"
    c.abilityTwo.description = "Xiao lunges forward, dealing Anemo DMG to opponents in his path. Can be used mid-air. Starts with 2 charges."
    c.abilityTwo.image = "Lemniscatic_Wind_Cycling.png"

    c.abilityThree.name = "Bane of All Evil"
    c.abilityThree.description = "Xiao dons the Yaksha Mask that set gods and demons trembling millennia ago."	
    c.abilityThree.image = "Bane_of_All_Evil.png"

    c.ascensionMats.matOne = 'Vayuda_Turquoise'
    c.ascensionMats.matTwo = 'Juvenile_Jade'
    c.ascensionMats.specialty = 'Qingxin'
    c.ascensionMats.commonMat = "Slime_Condensate"
    c.talentMats.talentMat = 'Prosperity'
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