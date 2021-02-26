import { createWeapon as createWeaponMutation } from '../graphql/mutations';
import { API } from 'aws-amplify';

export default async function createNewWeapon(weapon: any, setWeapon: any, weaponTemplate: any) {
    console.log("createNewWeapon() called")

    const w = { ...weapon};
    w.name = "Lithic Blade"
    w.type = 'Claymore'
    w.stars = 'Four'
    w.description = 'A greatsword carved and chiseled from the very bedrock of Liyue.'
    w.image = "Lithic_Blade.png"

    w.ascensionMats.matOne = "Luminous_Sands_from_Guyun"
    w.ascensionMats.matTwo = "Hunter's_Sacrificial_Knife"
    w.ascensionMats.specialty = 'N/A'
    w.ascensionMats.commonMat = "Firm_Arrowhead"
    setWeapon(w);

    if (!weapon.name || !weapon.description) {
        console.log("createNewWeapon() weapon.name || weapon.description issue")
        return; 
    }

    await API.graphql({ query: createWeaponMutation, variables: { input: weapon } });
    console.log("createNewWeapon() complete ");

    // reset weapon
    setWeapon(weaponTemplate);
}