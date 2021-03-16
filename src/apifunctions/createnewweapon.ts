import { createWeapon as createWeaponMutation } from '../graphql/mutations';
import { API } from 'aws-amplify';

export default async function createNewWeapon(weapon: any, setWeapon: any, weaponTemplate: any) {
    console.log("createNewWeapon() called")

    const w = { ...weapon};
    w.name = "Elegy for the End"
    w.type = 'Bow'
    w.stars = 'Five'
    w.description = "A bow as lovely as any bard's lyre, its arrows pierce the heart like a lamenting sigh."
    w.image = "Elegy_for_the_End.png"

    w.ascensionMats.matOne = "Boreal_Wolf's_Milk_Tooth"
    w.ascensionMats.matTwo = "Heavy_Horn"
    w.ascensionMats.specialty = 'N/A'
    w.ascensionMats.commonMat = "Recruit's_Insignia"
    setWeapon(w);

    if (!weapon.name || !weapon.description) {
        console.log("createNewWeapon() weapon.name || weapon.description issue")
        return; 
    }

    await API.graphql({ query: createWeaponMutation, variables: { input: weapon } });
    console.log("createNewWeapon() complete");

    // reset weapon
    setWeapon(weaponTemplate);
}