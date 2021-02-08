import { createWeapon as createWeaponMutation } from '../graphql/mutations';
import { API } from 'aws-amplify';

export default async function createNewWeapon(weapon: any, setWeapon: any, weaponTemplate: any) {
    console.log("createNewWeapon() called")

    const w = { ...weapon};
    w.name = "Primordial Jade Cutter"
    w.type = 'Sword'
    w.stars = 'Five'
    w.description = "A ceremonial sword masterfully carved from pure jade. There almost seems to be an audible sigh in the wind as it is swung."
    w.image = "Primordial_Jade_Cutter.png"

    w.ascensionMats.matOne = "Mist_Veiled_Lead_Elixir"
    w.ascensionMats.matTwo = "Mist_Grass_Pollen"
    w.ascensionMats.specialty = 'N/A'
    w.ascensionMats.commonMat = "Treasure_Hoarder_Insignia"
    setWeapon(w);

    if (!weapon.name || !weapon.description) {
        console.log("createNewWeapon() weapon.name || weapon.description issue ")
        return; 
    }

    await API.graphql({ query: createWeaponMutation, variables: { input: weapon } });
    console.log("createNewWeapon() complete ");

    // reset weapon
    setWeapon(weaponTemplate);
}